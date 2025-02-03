import React, {useEffect} from "react";
import {Card, Row, Col, Typography} from "antd";
import "./AboutUs.scss";
import axios from "axios";
import {BackendEndpoint} from "../../api/backend-endpoint.ts";

const {Title, Paragraph} = Typography;

const AboutUs: React.FC = () => {
    useEffect(() => {
        axios.get(BackendEndpoint.aboutUs).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
            }
        })
    }, []);
    return (
        <div className="about-us-container">
            <Row justify="center" className="about-us-header">
                <Col xs={22} sm={20} md={16} lg={12}>
                    <Title level={2}>关于我们</Title>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={22} sm={20} md={16} lg={12}>
                    <Card className="about-us-card">
                        <Paragraph>
                            我们是一家致力于提供高质量产品和服务的公司。我们的团队由行业内经验丰富的专业人士组成，秉承着“客户至上、品质第一”的原则，不断创新与进取。
                        </Paragraph>
                        <Paragraph>
                            公司成立于 20XX 年，经过多年的发展，已在业内建立了良好的口碑。我们的业务范围涵盖了多个领域，包括但不限于技术研发、产品设计和市场营销。
                        </Paragraph>
                        <Paragraph>
                            我们坚信，只有不断追求卓越，才能为客户提供更优质的服务。未来，我们将继续以创新为驱动，拓展新的市场，为更多客户创造价值。
                        </Paragraph>
                        <Paragraph>
                            欢迎各界朋友莅临指导，共创美好未来！
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;
