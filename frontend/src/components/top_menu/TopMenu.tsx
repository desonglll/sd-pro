import React, {useEffect, useState} from "react";
import {Layout, Menu, Image, MenuProps} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./TopMenu.scss";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.jpg";
import {RouterEndpoint} from "../../api/router-endpoint";
import {Information} from "../../props";

const {Header} = Layout;

const TopMenu: React.FC = () => {
    const [info, setInfo] = useState<Information>({
        address: "",
        available: false,
        company_name: "Shun De",
        email: "shunde02@sd-get.com",
        id: 0,
        manager: undefined,
        member: [],
        phone: "+86 15006905606",
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("info/")
            .then((response) => {
                if (response.status === 200) {
                    const information = response.data as Information[];
                    information.forEach((item) => {
                        if (item.available) {
                            setInfo(item);
                        }
                    });
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const menuItems: MenuProps["items"] = [
        {
            key: RouterEndpoint.category,
            label: <a>Category</a>,
        },
        {
            key: "email",
            label: (
                <a href={`mailto:${info.email}`} type="link">
                    Mail
                </a>
            ),
        },
        {
            key: "phone",
            label: (
                <a href={`tel:${info.phone}`} type="link">
                    Phone
                </a>
            ),
        },
    ];

    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
        navigate(e.key);
    };

    if (loading) return null;

    return (
        <>
            <Header className="top-menu-header">
                <div className="logo-container" onClick={() => navigate("/")}>
                    <Image src={logo1} alt="Logo" className="logo" preview={false} style={{paddingRight: "35px"}}/>
                    <Image
                        src={logo}
                        alt="Logo"
                        className="logo"
                        style={{width: 108}}
                        preview={false}
                    />
                </div>
                <Menu
                    mode="horizontal"
                    className="top-menu"
                    theme="light"
                    items={menuItems}
                    onClick={onClick}
                />
            </Header>
            {/*<div className="header-placeholder"/>*/}
        </>
    );
};

export default TopMenu;
