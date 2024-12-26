# Episode 03 - Laying the Foundation

## Ep.03 - Part 01

## Q: How to Create a Script to Run the App

#### Steps:

- Create a script in `package.json`:

  ```json
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
  ```

- If you don't know how to start the project, go to package.json, find the script, and run it.

Command to Run the App -

For development build:
npm run start

## Ep.03 - Part 02

## Q: What are React Elements?

A: React elements are the building blocks of React applications, equivalent to DOM elements in HTML.

Example:

```js
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Episode-03 Laying the foundation"
);
```

- First argument: The tag name.
- Second argument: The attributes as an object.
- Third argument: The content or children.

> **NOTE**: React.createElement is not the HTML element. When we do React.createElement, it creates a react element i.e. it creates a JavaScript object. When we render that element on to DOM, it will becomes the HTML element.

> **NOTE**: When we do root.render() the powerful library react-dom, takes the React.createElement i.e. the react element i.e. the JavaScript object and converts it into HTML element and push it to thebrowser. It will replaced, everything that is inside the root with whatever we are rendering.

> **NOTE**: To create element using React.createElement is not a good practice.

## Q: What is JSX?

A: JSX is a JavaScript syntax extension, which is easier to create React elements.

> **NOTE**: React is different and JSX is different. We can write React without JSX also. JSX is a convention of merging HTML and JavaScript together.

> **NOTE**: JSX is not a replacement for HTML. JSX is a syntax extension for JavaScript. JSX is HTML-like syntax or XML-like syntax.

```javascript
const jsxHeading =
<h1>Episode-03 Laying the foundation</h1> This jsxHeading is also the React element i.e. the JavaScript object.
```

- React.createElement("h1",{id:"heading"},"Episode-03 Laying the foundation");
  Using React, we created a React element -- core React

- Using JSX, we create React element i.e.

```javascript
const jsxHeading = <h1 id="heading">Episode-03 Laying the foundation</h1>;
```

> **NOTE**: Any piece of JS code is what, JS engine can understand. JS engine understands the ECMAScript language and the browser understands HTML.

> **NOTE**: Even before the code goes to the JS engine, it is transpiled and JS engine recieved the transpiled code, which browser understands.

> **NOTE**: It is the babel, that transpiles the JSX to React.createElement.

> **NOTE**: React.createElement gives you a React element i.e. the JavaScript object and when it is rendered, it is render as HTML element.

## Q: How JSX works?

A: JSX code is transpiled to React.createElement and this React.createElement makes the JS object and this JS object is rendered as HTML element.

> **NOTE**: JSX behind the scenes is React.createElement.

- Babel converts JSX to React.createElement and then React understands that React.createElement is a React element i.e. JavaScript object.

```javascript
JSX -> const heading = <h1>Episode-03 Laying the foundation</h1> => const heading = /_#**PURE**_/React.createElement("h1", null, "Episode-03 Laying the foundation");
```

- Babel transpile the ES6 code, to the code that older browsers can understand.

> **NOTE**: When we have multiple line of JSX code, we need to wrap it in the '()' parenthesis, because babel needs to understand where is JSX starts and ends.

## Ep.03 - Part 03

## 1. React Components

## Q: What is a React Component?

A React component is a building block of React applications. There are two types of components in React:

1. **Class-based components**
2. **Functional components**

#### React Functional Components

- A React functional component is just a normal JavaScript function.

> **NOTE**: Whenever we create a component, start with a capital letter. This is the React way of understanding that it is a component.

**Example:**

```javascript
const Heading = () => {}
A functional component is a normal JavaScript function that returns some piece of JSX code.
In other words, a function that returns JSX is a functional component.

```

## Q: How to render a functional component?

```javascript
const Heading = () => {
  return <h1>Episode-03 Laying the foundation</h1>;
};

root.render(<Heading />);
```

> **NOTE**: Babel is all transpiling, everything in normal React code and React is rendering what browser understands.

- root.render() is converting everything to HTML element and then browser is rendering it.

2. **Component Composition**

- It's a way of combining multiple components together i.e. to "compose" or "build" components by nesting inside each other.

> **NOTE**: At the end of the day everything is JavaScript in React.

## Ep.03 - Part 04

## Q: How to put a react element inside the component?

> **NOTE**: It we use '{}' inside the JSX code, we can put any piece of JS code inside it whcih is executed when the JSX code is rendered i.e. JavaScript expression.

> **NOTE**: JSX takes care of injection attack, it will sanitize the data inside of '{}' and then send it.
> JSX prevent "cross-site scripting" attacks.

> **NOTE**: At the end, functional component is the normal JS function and inside {}, we can execute any piece of JS code, so we can even call the functional component inside '{}'

## Code Example:

```javascript
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
```

> **NOTE**: Our code is readable because we are writing JSX and JSX is not react.
