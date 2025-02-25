import React, {useState} from 'react';
import './ContactForm.scss';
import logo from "../../assets/logo1.jpg";
import {Button, Form, Input} from "antd";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        address: '',
        name: '',
        tel: '',
        message: '',
    });
    const [form] = Form.useForm(); // 使用 Form hook 来管理表单

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (values: any) => {
        // values 包含了表单的所有字段数据
        console.log('Form Data: ', values);
    };

    return (
        <div className="contact-form">
            <div className="contact-info">
                <img src={logo} alt="Logo" className="logo"/>
                <p className="description">
                    Our business scope covers multiple fields such as construction machinery and heavy vehicles,
                    providing customers with one-stop services from single equipment to overall solutions. Whether you
                    need excavators, loaders, dump trucks, or other specialized vehicles, we can provide a diverse range
                    of options to meet your different needs.
                </p>
                <div className="contact-details">
                    <p>WhatsApp: +86-18552057316</p>
                    <p>WhatsApp: +86-15251631097</p>
                    <p>Email: kristen@xugonggroup.com</p>
                    <p>Email: daria@xugonggroup.com</p>
                    <p>Address: Room 2604, Unit 1, Building 23, Xudongguan, Lanshan District, Linyi City, Shandong
                        Province</p>
                </div>
            </div>
            <Form className="form" form={form} onFinish={handleSubmit} // 表单提交时的处理函数
                  layout="vertical">
                <Form.Item
                    name="email"
                    label="Email *"
                    rules={[{required: true, message: 'Please input your email!'}]} // 添加验证规则
                >
                    <Input
                        type="email"
                        placeholder="Email *"
                    />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="Name *"
                    rules={[{required: true, message: 'Please input your name!'}]} // 添加验证规则
                >
                    <Input
                        type="text"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Item>

                <Form.Item
                    name="tel"
                    label="Tel *"
                    rules={[{required: true, message: 'Please input your telephone number!'}]} // 添加验证规则
                >
                    <Input
                        type="tel"
                        placeholder="Tel"
                        value={formData.tel}
                        onChange={handleChange}
                    />
                </Form.Item>

                <Form.Item
                    name="message"
                    label="Message content *"
                    rules={[{required: true, message: 'Please input your message!'}]} // 添加验证规则
                >
                    <Input.TextArea
                        placeholder="Message content *"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
        ;
};

export default ContactForm;
