# Episode 01: The Inception

## Ep.01 - Part 01

1. **Browser does not understand React code**

2. **What is CDN**

   - Content Delivery Network
   - CDN is a network of servers that deliver content to users based on their location.
   - In this case, where React is hosted, we fetch it and use it in our project.

3. **What is crossorigin?**
   - It's like a rule for how the browser should fetch files from another website or server.
   - When we load something from another website, the browser needs to know how to handle it safely, and whether to send extra information like cookies or credentials.

---

## Ep.01 - Part 02

### First React Code

1. To create an HTML element in React, we use:

   ```javascript
   React.createElement(tagName, attributes, children);
   ```

   - **tagName**: The name of the HTML element
   - **attributes**: The attributes of the HTML element
   - **children**: The content of the HTML element

   > **NOTE**: Creating an element is a core concept in React.

2. We need to create a root element in React to render the element we have created:
   ```javascript
   ReactDOM.createRoot(document.getElementById("root3"));
   ```
   React.createElement() creates the element, and we need to render it in the DOM (in the browser).

### Example:

```javascript
const heading = React.createElement(
  "div",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root.render(heading);
```

> **NOTE**: Everything will be rendered in the root.

### Three things happening here:

- We are creating a `div` element with id `heading`.
- We are creating a root element with id `root3`.
- We are rendering the `heading` element in the root element.

---

## Ep.01 - Part 03

1. **What is the most costly operation in React?**

   - Removing and adding nodes to the DOM. This interaction is costly, and libraries and frameworks try to optimize this operation.

   > **NOTE**: When we `console.log(heading)`, it gives us the React Element (a JavaScript object) and not the HTML element (e.g., the `h1` tag).

   > **NOTE**: Using `React.createElement()` creates the React Element (JavaScript object). The render function takes that object, creates the HTML element, and puts it in the DOM.

---

## Ep.01 - Part 04

1. **How to create a nested element in React?**

### Example:

```javascript
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);
```

> **NOTE**: React Element (object) => HTML (Browser understands).

2. **If the parent has multiple children, we need to pass them in an array.**

### Example:

```javascript
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
```

> **NOTE**: If there is anything inside the root, the `render()` function will replace it. When we call `root.render()`, the element inside the root initially will be replaced with the new element.
