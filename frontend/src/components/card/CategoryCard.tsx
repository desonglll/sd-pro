import React, {useEffect} from "react";
import {Card as AntCard, Image, Row, Col} from "antd";
import "./CategoryCard.scss";
import {useNavigate} from 'react-router-dom';

export interface CategoryProps {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    slug: string
}


const CategoryCard: React.FC<{ category: CategoryProps }> = ({category: category}) => {
    const isOdd = category.id % 2 !== 0;
    const navigate = useNavigate()
    useEffect(() => {
    }, []);


    return (
        <AntCard
            id={category.id.toString()}
            className="underground-mining-card"
            style={{
                backgroundColor: isOdd ? "rgb(240, 240, 240)" : "white",
            }}
        >
            <Row
                gutter={[16, 16]}
                justify="center"
                align="middle"
                style={{width: "100%", margin: 0}}
            >
                {isOdd ? (
                    <>
                        <Col xs={24} md={12} style={{
                            width: "100%",  // 确保占满宽度
                            height: "100%"  // 确保占满高度
                        }}>
                            <Image
                                src={category.imageSrc}
                                alt={category.title}
                                className="mining-image"
                                preview={false}
                            />
                        </Col>
                        <Col xs={24} md={12} style={{
                            width: "100%",  // 确保占满宽度
                            height: "100%"  // 确保占满高度
                        }}>
                            <h1 style={{fontSize: "1.8rem", marginBottom: "16px"}}>
                                <a onClick={() => {
                                    navigate('/category/specific', {
                                        state: {category: category} // 通过 state 传递参数
                                    })
                                }}>{category.title}</a>
                            </h1>
                            <p style={{fontSize: "1rem", lineHeight: "1.6", color: "#495057"}}>
                                {category.description}
                            </p>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col xs={24} md={12}>
                            <h1 style={{fontSize: "1.8rem", marginBottom: "16px"}}>
                                <a onClick={() => {
                                    navigate('/category/specific', {
                                        state: {category: category} // 通过 state 传递参数
                                    })
                                }}>{category.title}</a></h1>
                            <p style={{fontSize: "1rem", lineHeight: "1.6", color: "#495057"}}>
                                {category.description}
                            </p>
                        </Col>
                        <Col xs={24} md={12}>
                            <Image
                                src={category.imageSrc}
                                alt={category.title}
                                className="mining-image"
                                preview={false}
                                style={{borderRadius: "8px"}}
                            />
                        </Col>
                    </>
                )}
            </Row>
        </AntCard>
    );
};

export default CategoryCard;
