import { Route, Routes } from "react-router-dom"
import { ProductPage } from "../pages/Product"

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<ProductPage/>}/>            
        </Routes>
    )
}

export {RoutesMain}