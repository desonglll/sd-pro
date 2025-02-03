import React from "react";
import {Button, Space} from "antd";
import "./Footer.scss";

const Footer: React.FC = () => {
    const handleContact = () => {
        // 在此处理“联系我们”的逻辑，比如跳转到联系我们页面
        console.log("联系我们");
    };

    const handleOrderNow = () => {
        // 在此处理“现在订购”的逻辑，比如跳转到订购页面
        console.log("现在订购");
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    Shunde China, 2025 All Right Reserved
                </div>
                <Space size="middle" className="footer-actions">
                    <Button type="link" onClick={handleContact}>
                        联系我们
                    </Button>
                    <Button type="primary" onClick={handleOrderNow}>
                        现在订购
                    </Button>
                </Space>
            </div>
        </div>
    );
};

export default Footer;
