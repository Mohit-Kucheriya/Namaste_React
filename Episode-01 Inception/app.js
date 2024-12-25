/*

const h1Heading = React.createElement(
    "h1",
    {id:"mainHeading"},
    "Hello World from React!"
);

console.log(h1Heading);

*/

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
    ])
]);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent);

