import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./TopMenu.scss";
import {RouterEndpoint} from "../../api/router-endpoint";
import Logo from "../about/Logo.tsx";


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
                <Logo/>
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
