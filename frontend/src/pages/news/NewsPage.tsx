import axios from "axios";
import { useEffect, useState } from "react";
import type { CardProps } from "../../props";
import IndexCard from "../../components/card/IndexCard";
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
            images: [{ image: string }];
            slug: string;
          }) => {
            return {
              id: item.id,
              title: item.title,
              navs: [],
              content: `${item.content.slice(0, 100)}...`,
              image: item.images[0].image,
              slug: item.slug,
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
        {newsCards.map((item) => (
          <IndexCard key={item.id} card={item} />
        ))}
      </div>
    )
  );
}

export default NewsPage;
