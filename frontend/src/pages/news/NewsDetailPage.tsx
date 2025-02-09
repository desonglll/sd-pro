import type React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {BackendEndpoint} from "../../api/backend-endpoint.ts";
import type {NewsProps} from "../../props.ts";
import "./NewsDetailPage.scss";
import {useParams} from "react-router-dom";
import Display from "../../components/common/Display.tsx";


const NewsDetailPage: React.FC = () => {
    const [news, setNews] = useState<NewsProps>({content: "", id: 0, images: [], title: ""});
    const [loading, setLoading] = useState<boolean>(true);
    const {id} = useParams(); // 获取 URL 里的 id

    useEffect(() => {
        axios
            .get(`${BackendEndpoint.news}${id}/`)
            .then((response) => {
                console.log(response.data)
                if (response.status === 200) {
                    setNews(response.data); // 取第一条数据
                    console.log(response.data);
                }
            })
            .catch((error) => console.error("Error fetching About Us data:", error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        !loading &&
        <Display data={{
            id: news.id,
            title: news.title,
            content: news.content,
            images: news.images.map((item) => ({
                image: item.image
            }))
        }}/>
    );
};

export default NewsDetailPage;
