import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProject from "../pages/Projects/AddProject/AddProject";
import UpdateProject from "../pages/Projects/UpdateProject/UpdateProject";
import Hire from "../pages/Hire/Hire";
import HireDetails from "../pages/Hire/HireDetails/HireDetails";
import SendHireOffer from "../pages/Hire/SendHireOffer/SendHireOffer";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <PortfolioPage /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register/> },
            { path: "add-project", element: <AddProject/> },
            { path: "update-project/:projectId", element: <UpdateProject/> },
            { path: "offer-details/:hireOfferId", element: <HireDetails/> },
            { path: "send-hiring-offer", element: <SendHireOffer/> },
            {path: 'hire', element: <Hire/>},
        ]
    }
])