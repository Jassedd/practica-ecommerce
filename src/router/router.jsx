import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Root from "./Root.jsx";
import ErrorPages from "../pages/ErrorPage.jsx";
import ArticleDetails from "../pages/ArticleDetails.jsx";

import App from "../App.jsx";
import Formulario from "../components/Formulario.jsx";
import Clickcounter from "../components/ClickCounter.jsx";



export const router = createBrowserRouter([

    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/articles",
                element: <App />
            },
            {
                path: "/articles/:id",
                element: <ArticleDetails />
            },
            {
                path: "/formulario",
                element: <Formulario />
            },
            {
                path: "/contador",
                element: <Clickcounter />
            },
            
            
        ],
    },
])

