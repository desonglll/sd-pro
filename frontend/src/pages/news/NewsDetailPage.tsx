import type React from "react";
import {useEffect, useState} from "react";
import {Card, Row, Col, Typography, Carousel, Spin, Layout} from "antd";
import axios from "axios";
import {BackendEndpoint} from "../../api/backend-endpoint.ts";
import type {NewsProps} from "../../props.ts";
import "./NewsDetailPage.scss";
import Footer from "../../components/skeleton/Footer.tsx";
import {useParams} from "react-router-dom";

const {Title, Paragraph} = Typography;

const NewsDetailPage: React.FC = () => {
    const [news, setNews] = useState<NewsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams(); // 获取 URL 里的 id

    useEffect(() => {
        axios
            .get(BackendEndpoint.news + id)
            .then((response) => {
                console.log(response.data)
                if (response.status === 200) {
                    setNews(response.data); // 取第一条数据
                    console.log(response.data);
                }
            })
            .catch((error) => console.error("Error fetching About Us data:", error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <Layout className="about-us-container">
            <Row justify="center" className="about-us-header">
                <Col xs={22} sm={20} md={16} lg={12}>
                    <Title level={2}>{news?.title}</Title>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={22} sm={20} md={16} lg={20}>
                    <Card className="about-us-card">
                        {loading ? (
                            <div className="loading-spinner">
                                <Spin size="large"/>
                            </div>
                        ) : (
                            <>
                                {news?.images && news.images.length > 0 && (
                                    <Carousel autoplay className="about-us-carousel">
                                        {news.images.map((image, index) => (
                                            <div key={index}>
                                                <img
                                                    src={axios.defaults.baseURL + image.image}
                                                    alt="about-us"
                                                />
                                            </div>
                                        ))}
                                    </Carousel>
                                )}
                                <Paragraph>{news?.content || "暂无公司简介"}</Paragraph>
                            </>
                        )}
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
};

export default NewsDetailPage;
