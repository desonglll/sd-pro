import "./App.scss";
import React from "react";

import {Routes, Route} from "react-router"
import IndexPage from "./pages/IndexPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import {RouterEndpoint} from "./api/router-endpoint.ts";
import TopMenu from "./components/top_menu/TopMenu.tsx";
import OrderForm from "./components/order/OrderForm.tsx";
import AboutUs from "./pages/about/AboutUs.tsx";
import {Layout} from "antd";


const App: React.FC = () => {

    return (
        <>
            <TopMenu/>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<IndexPage/>}/>
                    <Route path={`/${RouterEndpoint.category}*`} element={<CategoryPage/>}/>
                    <Route path={"/order"} element={<OrderForm/>}/>
                    <Route path={"/about"} element={<AboutUs/>}/>
                </Routes>
            </Layout>
        </>
    );
};

export default App;
