import "./App.scss";

import {Routes, Route} from "react-router";
import IndexPage from "./pages/IndexPage.tsx";
import CategoryPage from "./pages/category/CategoryPage.tsx";
import {RouterEndpoint} from "./api/router-endpoint.ts";
import TopMenu from "./components/top_menu/TopMenu.tsx";
import AboutUs from "./pages/about/AboutUs.tsx";
import {Layout} from "antd";
import OrderPage from "./pages/order/OrderPage.tsx";
import NewsPage from "./pages/news/NewsPage.tsx";
import NewsDetailPage from "./pages/news/NewsDetailPage.tsx";
import EnvironmentPage from "./pages/environment/EnvironmentPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import Footer from "./components/skeleton/Footer.tsx";
import React from "react";

const App: React.FC = () => {

    return (
        <>
            <TopMenu/>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<IndexPage/>}/>
                    <Route
                        path={`/${RouterEndpoint.category}*`}
                        element={<CategoryPage/>}
                    />
                    <Route path={"/order"} element={<OrderPage/>}/>
                    <Route path={"/about"} element={<AboutUs/>}/>
                    <Route path={"/contact"} element={<ContactPage/>}/>
                    <Route path={"/news"} element={<NewsPage/>}/>
                    <Route path={"/environment"} element={<EnvironmentPage/>}/>
                    <Route path={"/news/detail/:id"} element={<NewsDetailPage/>}/>
                </Routes>
            </Layout>
            <Footer/>

        </>
    );
};

export default App;
