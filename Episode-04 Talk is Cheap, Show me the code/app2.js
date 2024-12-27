import React from "react";
import ReactDOM from "react-dom/client";

// React Element JSX
const navbar = (
    <div>
        <h4>Navbar React Element</h4>
    </div>
);

const Title = () => {
    return (
        <div>
            <h2>Title Component</h2>
        </div>
    );
};

const App = () => {
    return (
        <div>
            {navbar}
            {Title()} 
            <Title />
            <Title></Title>
            <h1>App Component</h1>
            <Footer />
        </div>
    );
};

const Footer = () => <h3>Footer Component</h3>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
