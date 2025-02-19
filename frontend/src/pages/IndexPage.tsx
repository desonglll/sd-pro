import {Anchor} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import {BackendEndpoint} from "../api/backend-endpoint.ts";
import type {CardProps} from "../props.ts";
import Card from "../components/card/Card.tsx";
import StatisticNumbers from "../components/about/StatisticNumbers.tsx";

const productData: CardProps[] = [
    {
        id: 1,
        title: "ESCO® Underground Mining Products",
        content:
            "We have engineered and produced buckets for mining and construction markets for over 90 years. We use that expertise to design and manufacture direct replacement buckets for all popular LHD machines. Custom-engineered to meet application needs, we offer advanced LHD buckets fabricated to exacting standards with the finest materials available. In addition, there is a line of ESCO® underground mining products including drums, cutting heads, and cutting and trenching chain.",
        image: "cards/demo_card.jpg",
        navs: [],
    },
    // 可以在这里添加更多的产品数据
];

function IndexPage() {
    const [cards, setCards] = useState<CardProps[]>(productData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            axios
                .get(BackendEndpoint.card)
                .then((response) => {
                    if (response.status === 200) {
                        // 使用类型断言将 response.data 转换为 Card[]
                        console.log(response.data);
                        setCards(response.data);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    }, []);

    return (
        !loading && (
            <>
                <div className="video-container">
                    <iframe
                        className="video"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/_NHuQ32dCpc?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&loop=1&playlist=_NHuQ32dCpc"
                        title="sd-pro"
                        frameBorder="0"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        style={{
                            height: "100%",
                            objectFit: "cover",
                            pointerEvents: "none", // 禁止鼠标交互，隐藏控制栏
                        }}
                    />
                </div>

                <Anchor
                    className="anchor"
                    direction="horizontal"
                    items={cards.map((item) => ({
                        key: item.id,
                        href: `#${item.id}`,
                        title: item.title,
                    }))}
                />
                {/* Card 列表 */}
                {cards.map((item, index) => {
                    if (item.slug === "about") {
                        return (
                            <Card
                                idx={index}
                                key={item.id}
                                card={item}
                                navigateTo={item.slug ?? ""}
                                customComponent={<div>
                                    <StatisticNumbers/>
                                </div>}
                            />
                        )
                    } else {

                        return (
                            <Card
                                idx={index}
                                key={item.id}
                                card={item}
                                navigateTo={item.slug ?? ""}
                            />
                        )

                    }
                })}
            </>
        )
    )
        ;
}

export default IndexPage;
