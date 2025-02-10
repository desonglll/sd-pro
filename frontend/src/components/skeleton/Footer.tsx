import type React from "react";
import { Button, Space } from "antd";
import "./Footer.scss";

const Footer: React.FC = () => {
  const handleContact = () => {
    const email = "info@sd-get.com"; // Target email address
    const subject = encodeURIComponent("Inquiry About Your Product"); // Email subject (URL encoded)
    const body = encodeURIComponent(
      "Hello, I am interested in your product. Please provide me with more information."
    ); // Email body

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // const handleOrderNow = () => {
  //   // 在此处理“现在订购”的逻辑，比如跳转到订购页面
  //   console.log("现在订购");
  //   navigate(RouterEndpoint.order);
  // };

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
          <div>Tel: 0633-6810000, Mobile: 13606332126</div>
          <div>General Manager: Manager Li</div>
          <div>Email: info@sd-get.com</div>
          <div>
            Address: Juxian Economic Development Zone, Rizhao City, Shandong
            Province
          </div>
          <div className="footer-info">
            Shunde China, 2025 All Right Reserved
          </div>
        </div>
      </div>
      <Space size="middle" className="footer-actions">
        <Button type="link" onClick={handleContact}>
          Contact Us
        </Button>
        {/* <Button type="primary" onClick={handleOrderNow}>
          现在订购
        </Button> */}
      </Space>
    </div>
  );
};

export default Footer;
