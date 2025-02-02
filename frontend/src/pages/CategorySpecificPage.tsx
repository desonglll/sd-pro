import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Card, Spin, Row, Col} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import './CategorySpecificPage.scss';
import axios from "axios";
import {BackendEndpoint} from "../api/backend-endpoint.ts";
import {ToothProps} from "../props.ts";

function CategorySpecificPage() {
    const location = useLocation();
    const {category} = location.state || {}; // 获取传递的 state
    const [teeth, setTeeth] = useState<ToothProps[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(category);
        axios.get(BackendEndpoint.tooth, {
            params: {
                "categoryId": category.id,
            }
        }).then((resp) => {
            if (resp.status === 200) {
                setTeeth(resp.data);
            }
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    // Loading Spinner
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

    return (
        <div className="container">
            {loading ? (
                <Spin indicator={antIcon}/>
            ) : (
                <div>
                    <h2>{category.title}</h2>

                    <Row gutter={[16, 16]}>
                        {teeth.map((item) => (
                            <Col span={6} key={item.id}>
                                <Card
                                    hoverable
                                    cover={<img alt="example"
                                                className="card-image"
                                                src={item.imageSrc}/>}
                                    className={"card"}
                                >
                                    <Card.Meta
                                        title={item.name}
                                        description={item.description}
                                        className="card-meta"
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default CategorySpecificPage;
