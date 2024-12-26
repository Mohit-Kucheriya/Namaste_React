import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Episode-03 Laying the foundation"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Using JSX
const heading2 = (
    <h1 id="heading" className="heading">
        Namaste React using JSX
    </h1>
);
console.log(heading2);

// root.render(heading2);

// Functional Component
const Title = () => {
    return <h1>Title Component</h1>
}

// Component Composition - 
const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1 id="heading">Namaste React using Functional Component</h1>
        </div>
    );
};

root.render(<HeadingComponent />);
