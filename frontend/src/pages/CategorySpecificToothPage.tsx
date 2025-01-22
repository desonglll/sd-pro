import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {BackendEndpoint} from '../api/backend-endpoint.ts';
import {Card, Spin, Row, Col} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import './CategorySpecificToothPage.scss';

interface CategoryProps {
    id: number;
    name: string;
    title: string;
    description: string;
    imageSrc: string;
    slug: string;
}

interface ToothModelProps {
    id: number;
    name: string;
    company: string;
}

interface ToothProps {
    id: number;
    name: string;
    model: ToothModelProps;
    description: string;
    category: CategoryProps;
    imageSrc: string;
}

function CategorySpecificToothPage() {
    const location = useLocation();
    const {category} = location.state || {}; // 获取传递的 state
    const [teeth, setTeeth] = useState<ToothProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(BackendEndpoint.teethWithCategoryId, {
                params: {
                    categoryId: category.id,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setTeeth(response.data);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Loading Spinner
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

    return (
        <div className="container">
            <h1 className="title">{category.name}</h1>

            {loading ? (
                <Spin indicator={antIcon}/>
            ) : (
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
            )}
        </div>
    );
}

export default CategorySpecificToothPage;
