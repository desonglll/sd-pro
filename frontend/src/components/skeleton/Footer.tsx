import type React from "react";
import { Button, Space } from "antd";
import "./Footer.scss";
import { useNavigate } from "react-router";
import { RouterEndpoint } from "../../api/router-endpoint";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    // 在此处理“联系我们”的逻辑，比如跳转到联系我们页面
    console.log("联系我们");
  };

  const handleOrderNow = () => {
    // 在此处理“现在订购”的逻辑，比如跳转到订购页面
    console.log("现在订购");
    navigate(RouterEndpoint.order);
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>电话：0633-6810000，手机13606332126</div>
          <div>总经理：李经理</div>
          <div>邮箱：info@sd-get.com</div>
          <div>地址：山东省日照市莒县经济开发区</div>
          <div className="footer-info">
            Shunde China, 2025 All Right Reserved
          </div>
        </div>
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
  );
};

export default Footer;
