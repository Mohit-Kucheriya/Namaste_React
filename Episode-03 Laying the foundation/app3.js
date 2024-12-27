import React from "react";
import ReactDOM from "react-dom/client";

// Q1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const header = React.createElement("div", { class: "title" }, [
    React.createElement("h1", null, "I'm an h1 inside a div "),
    React.createElement("h2", null, "I'm an h2 inside a div "),
    React.createElement("h3", null, "I'm an h3 inside a div "),
])

const root3 = ReactDOM.createRoot(document.getElementById("root"));

// Q2. Create the same nested header element using JSX syntax.
const jsxHeader = (
    <div className="title">
        <h1>I'm an h1 using JSX</h1>
        <h2>I'm an h2 using JSX</h2>
        <h3>I'm an h3 using JSX</h3>
    </div>

)

// Q3. Create a Header Component from scratch using Functional Component with JSX
const Header = () => {
    return (
        <div className="title">
            <h1>I'm an h1 using Functional Component & JSX</h1>
            <h2>I'm an h2 using Functional Component & JSX</h2>
            <h3>I'm an h3 using Functional Component & JSX</h3>
        </div>
    )

}

root3.render(header)

root3.render(jsxHeader)

root3.render(<Header></Header>)