import {Routes, Route} from "react-router"
import CategorySpecificToothPage from "./CategorySpecificToothPage.tsx";
import {RouterEndpoint} from "../api/router-endpoint.ts";
import CategoryIndexPage from "./CategoryIndexPage.tsx";

function CategoryPage() {
    return (
        <>
            <Routes>
                <Route path={""} element={<CategoryIndexPage/>}/>
                <Route path={`${RouterEndpoint.specific}*`} element={<CategorySpecificToothPage/>}/>
            </Routes>
        </>
    )
}

export default CategoryPage;