import "./OrderPage.scss";
import { Layout } from "antd";
import OrderForm from "../../components/order/OrderForm";

function OrderPage() {
  return (
    <>
      <Layout className="order-page">
        <OrderForm />
      </Layout>
    </>
  );
}

export default OrderPage;
