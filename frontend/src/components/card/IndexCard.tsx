import React, {useEffect} from "react";
import {Card as AntCard, Image, Row, Col, Tag} from "antd";
import "./IndexCard.scss";
import {useNavigate} from 'react-router-dom';
import {RouterEndpoint} from "../../api/router-endpoint.ts";
import {CardProps} from "../../props.ts";
import axios from "axios";


const IndexCard: React.FC<{
    card: CardProps;
    className?: string;  // 新增className属性
}> = ({card, className}) => {  // 解构className
    const isOdd = card.id % 2 !== 0;
    const navigate = useNavigate()
    useEffect(() => {
    }, []);


    return (
        <AntCard
            id={card.id.toString()}
            className={`underground-mining-card ${className || ""}`}
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
                                src={axios.defaults.baseURL + card.image}
                                alt={card.title}
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
                                    navigate(RouterEndpoint.category, {})
                                }}>{card.title}</a>
                            </h1>
                            <p style={{fontSize: "1rem", lineHeight: "1.6", color: "#495057"}}>
                                {card.content}
                            </p>
                            {card.navs[0].series.map((item) => (
                                <Tag key={item.id}>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault(); // 阻止默认跳转行为
                                            navigate(RouterEndpoint.category, {
                                                state: {specificSeries: item},
                                            }); // 通过 React Router 跳转
                                        }}
                                        href={item.name} // 让鼠标样式变成链接
                                    >
                                        {item.name}
                                    </a>
                                </Tag>
                            ))}
                        </Col>
                    </>
                ) : (
                    <>
                        <Col xs={24} md={12}>
                            <h1 style={{fontSize: "1.8rem", marginBottom: "16px"}}>
                                <a onClick={() => {
                                    navigate(RouterEndpoint.category, {})
                                }}>{card.title}</a></h1>
                            <p style={{fontSize: "1rem", lineHeight: "1.6", color: "#495057"}}>
                                {card.content}
                            </p>
                            {card.navs.map((item) => (
                                <Tag key={item.id}>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault(); // 阻止默认跳转行为
                                            navigate(RouterEndpoint.category, {
                                                state: {specificSeries: item},
                                            }); // 通过 React Router 跳转
                                        }}
                                        href={item.slug} // 让鼠标样式变成链接
                                    >
                                        {item.name}
                                    </a>
                                </Tag>
                            ))}
                        </Col>
                        <Col xs={24} md={12}>
                            <Image
                                src={axios.defaults.baseURL + card.image}
                                alt={card.title}
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

export default IndexCard;
