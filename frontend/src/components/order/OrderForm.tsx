import type React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  message,
  type FormProps,
} from "antd";
import "./OrderForm.scss";
import dayjs from "dayjs";
import axios from "axios";
import { BackendEndpoint } from "../../api/backend-endpoint";

interface OrderFormValues {
  customerName: string;
  phone: string;
  email: string;
  orderType: "online" | "offline";
  orderDate: string;
  productName: string;
  quantity: number;
  remarks?: string;
}

const { Option } = Select;

const OrderForm: React.FC = () => {
  const [form] = Form.useForm<OrderFormValues>();

  const onFinish: FormProps<OrderFormValues>["onFinish"] = (values) => {
    console.log(dayjs(values.orderDate).format("YYYY-MM-DD"));

    console.log("表单提交成功，数据：", values);
    axios
      .post(BackendEndpoint.orderSubmit, {
        ...values,
        orderDate: dayjs(values.orderDate).format("YYYY-MM-DD"),
      })
      .then((res) => {
        console.log("订单信息提交成功：", res.data);
      });
    message.success("订单信息已提交！");
  };

  const onFinishFailed: FormProps<OrderFormValues>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("表单提交失败：", errorInfo);
    message.error("请检查表单填写是否正确！");
  };

  return (
    <div className="order-form-container">
      <h2>订单信息</h2>
      <Form
        form={form}
        name="orderForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          orderType: "online",
        }}
      >
        <Form.Item
          label="客户姓名"
          name="customerName"
          rules={[{ required: true, message: "请输入客户姓名" }]}
        >
          <Input placeholder="请输入客户姓名" />
        </Form.Item>

        <Form.Item
          label="联系电话"
          name="phone"
          rules={[
            { required: true, message: "请输入联系电话" },
            { pattern: /^[0-9]+$/, message: "只能输入数字" },
          ]}
        >
          <Input placeholder="请输入联系电话" />
        </Form.Item>
        <Form.Item
          label="联系邮箱"
          name="email"
          rules={[{ required: true, message: "请输入邮箱" }]}
        >
          <Input placeholder="请输入联系邮箱" />
        </Form.Item>
        <Form.Item
          label="订单类型"
          name="orderType"
          rules={[{ required: true, message: "请选择订单类型" }]}
        >
          <Select>
            <Option value="online">在线订单</Option>
            <Option value="offline">线下订单</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="订单日期"
          name="orderDate"
          rules={[{ required: true, message: "请选择订单日期" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="商品名称"
          name="productName"
          rules={[{ required: true, message: "请输入商品名称" }]}
        >
          <Input placeholder="请输入商品名称" />
        </Form.Item>

        <Form.Item
          label="商品数量"
          name="quantity"
          rules={[{ required: true, message: "请输入商品数量" }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={1}
            placeholder="请输入商品数量"
          />
        </Form.Item>

        <Form.Item label="备注" name="remarks">
          <Input.TextArea rows={4} placeholder="请输入备注信息" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            提交订单
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OrderForm;
