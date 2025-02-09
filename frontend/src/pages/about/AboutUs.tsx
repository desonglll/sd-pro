import type React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {BackendEndpoint} from "../../api/backend-endpoint.ts";
import type {AboutUsProps} from "../../props.ts";
import "./AboutUs.scss";
import Display from "../../components/common/Display.tsx";


const AboutUs: React.FC = () => {
    const [about, setAbout] = useState<AboutUsProps>({content: "", id: 0, images: [], name: "", title: ""});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get(BackendEndpoint.aboutUs)
            .then((response) => {
                if (response.status === 200 && response.data.length > 0) {
                    setAbout(response.data[0]); // 取第一条数据
                }
            })
            .catch((error) => console.error("Error fetching About Us data:", error))
            .finally(() => setLoading(false));
    }, []);

    return (
        !loading &&
        <Display data={{
            id: about.id,
            title: about.title,
            content: about.content,
            images: about.images,
        }}/>

    );
};

export default AboutUs;
