import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"
import { Navigation } from "./components/Navigation"
import { Footer } from "./components/Footer"

export const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <AppRoutes/>
            <Footer/>
        </BrowserRouter>
    )
}