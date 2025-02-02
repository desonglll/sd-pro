import "./App.scss";
import React from "react";

import {Routes, Route} from "react-router"
import IndexPage from "./pages/IndexPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import {RouterEndpoint} from "./api/router-endpoint.ts";
import TopMenu from "./components/top_menu/TopMenu.tsx";


const App: React.FC = () => {

    return (
        <>
            <TopMenu/>
            <Routes>
                <Route path={"/"} element={<IndexPage/>}/>
                <Route path={`/${RouterEndpoint.category}*`} element={<CategoryPage/>}/>
            </Routes>
            {/*<Footer/>*/}
        </>
    );
};

export default App;
