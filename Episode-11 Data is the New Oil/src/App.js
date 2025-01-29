import React, { use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

// Define App component
const App = () => {
    const [userName, setUserName] = useState()

    useEffect(() => {
        const data = {
            loggedInUser: "Mohit Kucheriya"
        }
        setUserName(data.loggedInUser)

    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>

            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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
