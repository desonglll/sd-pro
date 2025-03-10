import type React from "react";
import {Card as AntCard, Image, Row, Col, Tag} from "antd";
import {useNavigate} from "react-router-dom";
import {RouterEndpoint} from "../../api/router-endpoint.ts";
import type {CardProps} from "../../props.ts";
import axios from "axios";
import "./Card.scss";

const Card: React.FC<{
    idx: number;
    card: CardProps;
    navigateTo: string;
    className?: string;
    customComponent?: React.ReactElement;
}> = ({idx, card, navigateTo = "", className = "", customComponent = null}) => {
    const navigate = useNavigate();
    const isOdd = idx % 2 !== 0;

    return (
        <AntCard
            id={card.id.toString()}
            className={`card ${className}`}
            style={{backgroundColor: isOdd ? "#f0f0f0" : "#fff"}}
        >
            <Row gutter={[24, 16]} align="middle" justify={"center"}>
                {isOdd && (
                    <Col xs={24} md={10}>
                        <Image
                            src={axios.defaults.baseURL + (card.image ?? "")}
                            alt={card.title}
                            className="mining-image"
                            preview={false}
                        />
                    </Col>
                )}

                <Col xs={24} md={10}>
                    <h1>
                        <a onClick={() => navigate(navigateTo || "")}>{card.title}</a>
                    </h1>
                    <p>{card.content}</p>
                    {customComponent}
                    <div className="tags">
                        {card.navs?.map((item) => (
                            <Tag key={item.id} className="clickable-tag">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(RouterEndpoint.category, {
                                            state: {specificSeries: item},
                                        });
                                    }}
                                >
                                    {item.name}
                                </a>
                            </Tag>
                        ))}
                    </div>
                </Col>

                {!isOdd && (
                    <Col xs={24} md={10}>
                        <Image
                            src={axios.defaults.baseURL + (card.image ?? "")}
                            alt={card.title}
                            className="mining-image"
                            preview={false}
                        />
                    </Col>
                )}
            </Row>
        </AntCard>
    );
};

export default Card;
