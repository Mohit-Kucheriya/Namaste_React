import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = document.createElement("h2");
heading1.textContent = "I'm an h2 tag from vanilla JS";

document.getElementById("root2").appendChild(heading1);

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h2", {}, "I'm an h2 tag from React App")
);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent);

