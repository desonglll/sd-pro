import type React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {BackendEndpoint} from "../../api/backend-endpoint.ts";
import type {AboutUsProps} from "../../props.ts";
import "./AboutUs.scss";
import Display from "../../components/common/Display.tsx";
import {Typography} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";


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
            typeRC: <Typography>
                <Paragraph>
                    SHUNDE MECHANICAL PARTS CO.,LTD is a professional machinery fittings manufacturer integrating R&D,
                    production and sales. Located in the beautiful coastal city of Rizhao, the company covers an area of
                    60,000 square metres, with modern production workshops and advanced manufacturing equipment, and has
                    strong independent research and development and production capacity. With an annual production
                    capacity of 15,000 tonnes, the company is able to independently develop and produce more than 6,000
                    sets of all kinds of machinery parts, covering a wide range of industries to meet the diversified
                    needs of customers.
                </Paragraph>
                <Paragraph>
                    The company maintains in-depth co-operation with ESCO, CAT and other international famous
                    enterprises all the year round, and has won the trust of customers all over the world by virtue of
                    the excellent product quality, exquisite manufacturing technology and strict quality management
                    system. Our products are widely exported to Australia, the United States, Australia and other
                    countries.
                </Paragraph>
                <Paragraph>
                    In the future, we will continue to deepen the co-operation with international first-class
                    enterprises, increase the investment in research and development, expand the market channels,
                    promote the high-quality development of the enterprise, and endeavour to become the industry's
                    leading manufacturer of machinery parts and accessories, and create greater value for customers
                    around the world!
                </Paragraph>
            </Typography>
        }}/>
    );
};

export default AboutUs;
