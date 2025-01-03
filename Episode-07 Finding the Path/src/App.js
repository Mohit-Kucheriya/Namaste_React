import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define App component
const App = () => {
    console.log(<Body />);

    return (
        <div>
            <Header />
            <Body />
        </div>
    );
};

// Define appRouter using createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]);

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));


// Render the RouterProvider with the router
root.render(<RouterProvider router={appRouter} />);
