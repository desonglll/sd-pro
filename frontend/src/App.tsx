import "./App.scss";

import { Routes, Route } from "react-router";
import IndexPage from "./pages/IndexPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import { RouterEndpoint } from "./api/router-endpoint.ts";
import TopMenu from "./components/top_menu/TopMenu.tsx";
import AboutUs from "./pages/about/AboutUs.tsx";
import { Layout } from "antd";
import OrderPage from "./pages/order/OrderPage.tsx";

const App: React.FC = () => {
  return (
    <>
      <TopMenu />
      <Layout>
        <Routes>
          <Route path={"/"} element={<IndexPage />} />
          <Route
            path={`/${RouterEndpoint.category}*`}
            element={<CategoryPage />}
          />
          <Route path={"/order"} element={<OrderPage />} />
          <Route path={"/about"} element={<AboutUs />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
