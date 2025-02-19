import React, {useEffect, useState} from "react";
import {Image} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./TopMenu.scss";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.jpg";
import {RouterEndpoint} from "../../api/router-endpoint";


const TopMenu: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("info/")
            .then((response) => {
                console.log(response.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    if (loading) return null;

    return (
        <>
            <div className="top-menu-header">
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
                <div className="top-menu">
                    <div className="item" onClick={() => {
                        navigate(RouterEndpoint.home)
                    }}>HOME
                    </div>
                    <div className="item" onClick={() => {
                        navigate(RouterEndpoint.category)
                    }}>PRODUCTS
                    </div>
                    <div className="item" onClick={() => {
                        navigate(RouterEndpoint.aboutUs)
                    }}>ABOUT US
                    </div>
                    <div className="item" onClick={() => {
                        navigate(RouterEndpoint.contactUs)
                    }}>CONTACT US
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopMenu;
