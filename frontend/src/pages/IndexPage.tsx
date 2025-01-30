import proVideo from "../assets/pro.mov";
import {Anchor} from "antd";
import CategoryCard, {CategoryProps} from "../components/card/CategoryCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {BackendEndpoint} from "../api/backend-endpoint.ts";

const productData: CategoryProps[] = [
    {
        id: 1,
        title: "ESCO® Underground Mining Products",
        description:
            "We have engineered and produced buckets for mining and construction markets for over 90 years. We use that expertise to design and manufacture direct replacement buckets for all popular LHD machines. Custom-engineered to meet application needs, we offer advanced LHD buckets fabricated to exacting standards with the finest materials available. In addition, there is a line of ESCO® underground mining products including drums, cutting heads, and cutting and trenching chain.",
        imageSrc:
            "https://www.global.weir/globalassets/category-and-sub-category-images/esco-category-page-images/ESCO_Cable_Shovel_Wear_Parts.jpg",
        slug: "esco-underground-mining-products"
    },
    // 可以在这里添加更多的产品数据
];

function IndexPage() {
    const [cards, setCards] = useState<CategoryProps[]>(productData)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            axios.get(BackendEndpoint.bucketCategory).then((response) => {
                if (response.status === 200) {
                    // 使用类型断言将 response.data 转换为 Card[]
                    setCards(response.data);
                }
            }).finally(() => {
                setLoading(false)
            });
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    }, []);

    return (!loading &&
        <>
            <div className="video-container">
                <video
                    className="video"
                    width="100%"
                    height="100%"
                    // src={proVideo}
                    src={"https://youtu.be/_NHuQ32dCpc"}
                    // controls
                    autoPlay
                    muted
                    loop
                    style={{objectFit: "cover"}}
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <Anchor className="anchor" direction="horizontal"
                    items={cards.map((item) => (
                        {
                            key: item.id,
                            href: `#${item.id}`,
                            title: item.title,
                        }
                    ))}
            />
            {/* Card 列表 */}
            {cards.map((item) => (
                <CategoryCard
                    key={item.id}
                    category={item}
                />
            ))}
        </>
    )
}

export default IndexPage;