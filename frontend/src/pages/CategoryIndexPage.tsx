import { useEffect, useState } from "react";
import axios from "axios";
import { BackendEndpoint } from "../api/backend-endpoint.ts";
import { CategoryProps, SeriesProps, ToothProps } from "../props.ts";
import "./CategoryIndexPage.scss";
import { useLocation } from "react-router";
import { Card, Layout, Menu, MenuProps } from "antd";
import Divider from "../components/skeleton/DividerLeftRight.tsx";

function CategoryIndexPage() {
  const location = useLocation();
  const { specificSeries } = location.state || {};
  const [series, setSeries] = useState<SeriesProps[]>([]);
  const [tooth, setTooth] = useState<ToothProps[]>([]);
  const [displayTooth, setDisplayTooth] = useState<ToothProps[]>(tooth);
  const [category, setCategory] = useState<CategoryProps[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [openKey, setOpenKey] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [seriesRes, categoryRes, toothRes] = await Promise.all([
          axios.get(BackendEndpoint.series),
          axios.get(BackendEndpoint.category),
          axios.get(BackendEndpoint.tooth),
        ]);

        if (seriesRes.status === 200) {
          setSeries(seriesRes.data);
        }
        if (categoryRes.status === 200) {
          setCategory(categoryRes.data);
        }
        if (toothRes.status === 200) {
          setTooth(toothRes.data);
          if (specificSeries) {
            let c = categoryRes.data as CategoryProps[];
            setSelectedKey("s-" + specificSeries.id);
            setOpenKey("s-" + specificSeries.id);
            c = c.filter((c) => c.series.id === specificSeries.id);
            const t = toothRes.data as ToothProps[];
            const a: ToothProps[] = [];
            c.map((c) =>
              t.filter((t) => t.category.id === c.id).forEach((i) => a.push(i))
            );
            setDisplayTooth(a);
          } else {
            setSelectedKey("a");
            setDisplayTooth(toothRes.data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData().finally(() => {
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (selectedKey === "a") {
      setDisplayTooth(tooth);
    } else {
      const updatedTooth = tooth.filter(
        (t) => t.category.id === Number(selectedKey.split("-")[1])
      );
      setDisplayTooth(updatedTooth);
    }
  }, [selectedKey]);
  const onClickMenu: MenuProps["onClick"] = (target) => {
    console.log(target);
    setSelectedKey(target.key);
  };
  return (
    !loading && (
      <>
        <Layout
          style={{ display: "flex", flexDirection: "row", height: "93vh" }}
        >
          <Divider>
            <Menu
              items={[
                {
                  key: "a",
                  label: "View All",
                },
                ...series.map((s) => ({
                  key: "s-" + s.id,
                  label: s.title,
                  children: [
                    ...category
                      .filter((c) => c.series.id === s.id)
                      .map((c) => ({
                        key: "c-" + c.id,
                        label: c.title,
                      })),
                  ],
                })),
              ]}
              mode={"inline"}
              selectedKeys={[selectedKey]}
              defaultOpenKeys={[openKey]}
              onClick={onClickMenu}
              style={{ height: "100%", width: "100%", overflow: "auto" }}
            />
            <Card>
              {displayTooth.map((t) => (
                <Card.Grid key={t.id}>
                  <Card
                    cover={<img src={axios.defaults.baseURL + t.image} />}
                    title={t.name}
                  ></Card>
                </Card.Grid>
              ))}
            </Card>
          </Divider>
        </Layout>
      </>
    )
  );
}

export default CategoryIndexPage;
