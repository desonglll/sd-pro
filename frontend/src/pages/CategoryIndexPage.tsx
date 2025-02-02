import {useEffect, useState,} from "react";
import axios from "axios";
import {BackendEndpoint} from "../api/backend-endpoint.ts";
import {CategoryProps, SeriesProps, ToothProps} from "../props.ts";
import {Anchor, Card, Col, Row} from "antd";
import "./CategoryIndexPage.scss"

function CategoryIndexPage() {
    const [series, setSeries] = useState<SeriesProps[]>([])
    const [tooth, setTooth] = useState<ToothProps[]>([])
    const [category, setCategory] = useState<CategoryProps[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [seriesRes, categoryRes, toothRes] = await Promise.all([
                    axios.get(BackendEndpoint.series),
                    axios.get(BackendEndpoint.category),
                    axios.get(BackendEndpoint.tooth)
                ]);

                if (seriesRes.status === 200) {
                    setSeries(seriesRes.data);
                    console.log(seriesRes.data);
                }
                if (categoryRes.status === 200) {
                    setCategory(categoryRes.data);
                    console.log(categoryRes.data);
                }
                if (toothRes.status === 200) {
                    setTooth(toothRes.data);
                    console.log(toothRes.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().finally(() => {
            setLoading(false)
        });
    }, []);
    return (
        !loading && (
            <>
                <Row>
                    <Col span={20}>
                        {series.map((seriesItem, seriesIndex) => (
                            <div key={seriesIndex}>
                                <h2>{seriesItem.title}</h2>
                                {category
                                    .filter((categoryItem) => categoryItem.series.id === seriesItem.id) // 仅显示当前系列的分类
                                    .map((categoryItem, categoryIndex) => (
                                        <Card title={categoryItem.title} key={categoryIndex}
                                              id={categoryItem.id.toString()}>
                                            {tooth
                                                .filter((toothItem) => toothItem.category.id === categoryItem.id)
                                                .map((toothItem, toothIndex) => (
                                                    <Card.Grid key={toothIndex}>
                                                        <Card
                                                            cover={
                                                                <img
                                                                    alt={toothItem.name}
                                                                    src={toothItem.imageSrc}
                                                                />
                                                            }
                                                        >
                                                            <Card.Meta title={toothItem.name}
                                                                       description={toothItem.description}/>
                                                        </Card>
                                                    </Card.Grid>
                                                ))}
                                        </Card>
                                    ))}
                            </div>
                        ))}
                    </Col>
                    <Col span={4}>
                        <Anchor style={{overflow: "auto", height: "100%"}} items={category.map((item) => (
                            {
                                key: item.id,
                                href: `#${item.id}`,
                                title: item.title,
                            }
                        ))}/>
                    </Col>
                </Row>
            </>
        )
    );

}

export default CategoryIndexPage;