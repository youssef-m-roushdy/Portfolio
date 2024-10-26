import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <PortfolioPage /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register/> },
        ]
    }
])