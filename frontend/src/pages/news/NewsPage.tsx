import axios from "axios";
import { useEffect, useState } from "react";
import type { CardProps } from "../../props";
import Card from "../../components/card/Card.tsx";
import { RouterEndpoint } from "../../api/router-endpoint.ts";
// export interface CardProps {
//     id: number;
//     title: string;
//     content: string;
//     image: string;
//     navs: NavProps[];
//     slug: string;
// }
function NewsPage() {
  const [newsCards, setNewsCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("news/")
      .then((response) => {
        const news = response.data.map(
          (item: {
            id: number;
            title: string;
            content: string;
            images?: [{ image: string }];
          }) => {
            return {
              id: item.id,
              title: item.title,
              navs: [],
              content: `${item.content.slice(0, 100)}...`,
              image: item.images?.[0]?.image,
            };
          }
        );
        console.log(news);
        setNewsCards(news);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    !loading && (
      <div>
        {newsCards.map((item, index) => (
          <Card
            idx={index}
            key={index.toFixed()}
            card={item}
            navigateTo={RouterEndpoint.newsDetail + item.id}
          />
        ))}
      </div>
    )
  );
}

export default NewsPage;
