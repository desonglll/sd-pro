import {Routes, Route} from "react-router"
import CategorySpecificPage from "./CategorySpecificPage.tsx";
import {RouterEndpoint} from "../api/router-endpoint.ts";
import CategoryIndexPage from "./CategoryIndexPage.tsx";

function CategoryPage() {
    return (
        <>
            <Routes>
                <Route path={""} element={<CategoryIndexPage/>}/>
                <Route path={`${RouterEndpoint.specific}*`} element={<CategorySpecificPage/>}/>
            </Routes>
        </>
    )
}

export default CategoryPage;
