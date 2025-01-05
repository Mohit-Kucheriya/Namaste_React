import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Define App component
const App = () => {
    // console.log(<Body />);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

// Define appRouter using createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
]);

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the RouterProvider with the router
root.render(<RouterProvider router={appRouter} />);
