import React from 'react';
import {Form, Input, Button} from 'antd';
import './Footer.scss';
import whatsapp from "../../assets/whatsapp.jpg"
import Logo from "../about/Logo.tsx";

const Footer: React.FC = () => {
    const [form] = Form.useForm(); // 使用 Form hook 来管理表单

    // 提交表单的处理逻辑
    const handleSubmit = (values: any) => {
        // values 包含了表单的所有字段数据
        console.log('Form Data: ', values);
    };

    return (
        <div className="footer">
            <div className="footer__section footer__contact">
                <h2>CONTACT US</h2>
                <Logo/>
                <p>Tel: +61 493307701, +86 15006905606</p>
                <p>Email: shunde02@sd-get.com</p>
                <p>Address: 3 George Julius Ave, Zetland, Sydney, NSW</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>WhatsApp: </p>
                    <div className="footer__qr">
                        <img src={whatsapp} alt="WhatsApp QR Code"/>
                    </div>
                </div>
            </div>

            <div className="footer__section footer__quote">
                <h3>GET A FREE QUOTE</h3>
                <Form
                    className={"form"}
                    form={form}
                    onFinish={handleSubmit} // 表单提交时的处理函数
                    layout="vertical" // 设置表单项的布局为垂直排列
                >
                    <Form.Item
                        name="email"
                        label="Email *"
                        rules={[{required: true, message: 'Please input your email!'}]} // 添加验证规则
                    >
                        <Input type="email" placeholder="Email *"/>
                    </Form.Item>

                    <Form.Item name="name" label="Name *"
                               rules={[{required: true, message: 'Please input your name!'}]} // 添加验证规则
                    >
                        <Input type="text" placeholder="Name"/>
                    </Form.Item>

                    <Form.Item
                        name="content"
                        label="Message content *"
                        rules={[{required: true, message: 'Please input your message!'}]} // 添加验证规则
                    >
                        <Input.TextArea placeholder="Message content *"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Footer;
