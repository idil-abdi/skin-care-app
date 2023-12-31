import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { Checkout } from "./pages/Checkout"
import { ContactUs } from "./pages/ContactUs"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/checkout" element={<Checkout/>}/>            
            <Route path="/contact" element={<ContactUs/>}/>            
        </Routes>
    )
}