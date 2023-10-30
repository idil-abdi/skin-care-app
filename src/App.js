import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"
import { Navigation } from "./components/Navigation"

export const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <AppRoutes/>
        </BrowserRouter>
    )
}