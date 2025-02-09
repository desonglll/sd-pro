import {Card, Row, Col, Typography, Carousel, Layout} from "antd";
import axios from "axios";
import "./Display.scss";
import Footer from "../../components/skeleton/Footer.tsx";

const {Title, Paragraph} = Typography;

export interface DisplayDataProps {
    id: number,
    title: string,
    content: string,
    images?: { image: string }[],
}

const Display = ({data}: { data: DisplayDataProps }) => {
    return (
        <Layout className="container">
            <Row justify="center" className="header">
                <Col xs={22} sm={20} md={16} lg={12}>
                    <Title level={2}>{data.title}</Title>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={22} sm={20} md={16} lg={20}>
                    <Card className="card">
                        <>
                            {data?.images && data.images.length > 0 && (
                                <Carousel autoplay className="carousel">
                                    {data.images.map((image, index) => (
                                        <div key={index}>
                                            <img
                                                src={axios.defaults.baseURL + image.image}
                                                alt="label"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            )}
                            <Paragraph>{data?.content || "暂无内容"}</Paragraph>
                        </>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    )
};

export default Display;
