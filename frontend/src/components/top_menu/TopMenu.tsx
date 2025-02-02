import {Layout, Menu, Image, MenuProps,} from "antd";
import "./TopMenu.scss";
import logo from "../../assets/logo.jpg";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {RouterEndpoint} from "../../api/router-endpoint.ts";
import {Information} from "../../props.ts";

const {Header} = Layout;

function TopMenu() {
    const [info, setInfo] = useState<Information>({
        address: "",
        available: false,
        company_name: "",
        email: "",
        id: 0,
        manager: undefined,
        member: [],
        phone: "15006905606",
    });
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get("info/")
            .then((response) => {
                if (response.status === 200) {
                    const information = response.data as Information[];
                    information.forEach((item) => {
                        if (item.available) {
                            setInfo(item as Information);
                        }
                    });
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    const menuItems: MenuProps['items'] = [
        {
            key: RouterEndpoint.category,
            label: (<a>Category</a>)
        },
        {
            key: 'email',
            label: (
                <a type={"link"} href={`mailto:${info.email}`}>
                    Mail
                </a>
            )
        },
        {
            key: 'phone',
            label: (
                <a type={"link"} href={`tel:${info.phone}`}>
                    Phone
                </a>
            )
        },
    ]
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        navigate(e.key)
    };
    return (
        !loading && (
            <>
                <Header className="top-menu-header">
                    <div className="logo-container">
                        <Image src={logo} alt="Logo" className="logo" preview={false} onClick={() => {
                            navigate("/")
                        }}/>
                    </div>
                    <Menu
                        mode="horizontal"
                        className="top-menu"
                        theme="light"
                        items={menuItems}  // 使用 items 属性
                        onClick={onClick}
                    />
                </Header>
                <div className="header-placeholder"/>

            </>
        )
    );
}

export default TopMenu;
