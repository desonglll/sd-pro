import {Routes, Route} from "react-router"
import CategoryIndexPage from "./CategoryIndexPage.tsx";

function CategoryPage() {
    return (
        <>
            <Routes>
                <Route path={""} element={<CategoryIndexPage/>}/>
            </Routes>
        </>
    )
}

export default CategoryPage;
