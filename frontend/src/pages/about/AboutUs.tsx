import type React from "react";
import { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Carousel, Spin, Layout } from "antd";
import axios from "axios";
import { BackendEndpoint } from "../../api/backend-endpoint.ts";
import type { AboutUsProps } from "../../props.ts";
import "./AboutUs.scss";
import Footer from "../../components/skeleton/Footer.tsx";

const { Title, Paragraph } = Typography;

const AboutUs: React.FC = () => {
  const [about, setAbout] = useState<AboutUsProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(BackendEndpoint.aboutUs)
      .then((response) => {
        if (response.status === 200 && response.data.length > 0) {
          setAbout(response.data[0]); // 取第一条数据
        }
      })
      .catch((error) => console.error("Error fetching About Us data:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout className="about-us-container">
      <Row justify="center" className="about-us-header">
        <Col xs={22} sm={20} md={16} lg={12}>
          <Title level={2}>{about?.title || "关于我们"}</Title>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={22} sm={20} md={16} lg={20}>
          <Card className="about-us-card">
            {loading ? (
              <div className="loading-spinner">
                <Spin size="large" />
              </div>
            ) : (
              <>
                {about?.images && about.images.length > 0 && (
                  <Carousel autoplay className="about-us-carousel">
                    {about.images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={axios.defaults.baseURL + image.image}
                          alt="about-us"
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
                <Paragraph>{about?.content || "暂无公司简介"}</Paragraph>
              </>
            )}
          </Card>
        </Col>
      </Row>
      <Footer />
    </Layout>
  );
};

export default AboutUs;
