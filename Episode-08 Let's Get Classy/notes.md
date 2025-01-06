# Episode-08 Let's Get Classy

## Class Based Component - Older way of creating components in React

## Ep.08 - Part 01

## Q: What is functional component?

A: It's just a normal function that returns a JSX element. It's a function that takes props as an argument and returns a JSX element.

```jsx
const FunctionalComponent = (props) => {
  return <div>This is a functional component</div>;
};
```

## Q: What is class based component?

A: It's a class that extends React.Component.

## Q: How to create a class based component?

A: You can create a class based component by extending React.Component.

```jsx
class ClassBasedComponent extends React.Component {
  render() {
    return <div>This is a class based component</div>;
  }
}

Now, we have the render() method inside the component, and this render() method will return a piece of JSX code which will be rendered on the screen.
```

> **NOTE:** Class based components is a class, which extends React.Component and it has a render() method which returns a JSX element.

## Q: What is React.Component?

A: React.Component is basically a class which is given to us by React, and it inherits all the properties and methods of the class.

## Q: How to pass props into the component?

A: Same as we do in functional components, but to receivw the props, we use 'constructor()' and recieve the props, inside that we'll also use 'super()' to call the parent class. And then we'll use 'this.props' to get the props.

```jsx
class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>This is a class based component</p>
        <p>Props: {this.props.name}</p>
      </div>
    );
  }
}
```

> **NOTE:** Whenever the class is initialized, it will call the constructor() method, and to use the props, we use 'this.props'.

## Ep.08 - Part 02

> **Note:** Loading a class based component on the webpage means, I'm creating an instance of that class.
> Instance of a class is a new object that is created from the class.

## Q: How we can create a state in our class based component?

A: Whenever we create an instance of a class, constructor() method is called, and this is where we can create a state and receive the props.

```jsx
class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
}

Now, this.state is a big object. It is just a property that React uses within the component to manage data.
```

## Q: How to use the state variable?

A: Example:

```jsx
<h1>Count: {this.state.count}</h1>
```

> **NOTE:** If we want to create another state variable, we can do it by adding another property to the state object.

```jsx
this.state = {
  count: 0,
  count2: 2,
};
as it is a big object, we can add as many properties as we want.
```

> **NOTE:** In functional component, we use useState() hook to create a state variable, but behind the scenes, react uses a big object to keep track of the state.

```jsx
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(2);

Behind the scenes, react will put all the state variable inside that object
```

## Ep.08 - Part 03

## Q: How to update the state variable?

A: React gives access to an important function which is known as this.setState(). This function takes an object as an argument, and it updates the state.

```jsx
this.setState({ count: this.state.count + 1 });
```

> **NOTE:** Whenever the state variable will be updated, the component will re-render.

> **NOTE:** If we have to update multiple state variables, we can badge this two and update them in one go.

```jsx
this.setState({
  count: this.state.count + 1,
  count2: this.state.count2 + 1,
});
```

## Ep.08 - Part 04

## Q: What is the life cycle of this react class based component? How this component is loaded or mounted on the page?

A: Suppose 'About' is the name of the component i.e. parent component, and 'UserClass' is the name of the child component and it is inside the 'About' component. It goes line by line and when it see class based component so it start loading i.e. it will go to class based component now instance of this class is created and constructor() method is called and then render() method is called.

> **NOTE:** When the component is loaded, it will call the constructor() method and then render() method.

> **NOTE:** It become complicated when parent is also class based component.

> **NOTE:** Just like constructor() method, render() method, class based component has one more method which is also very important, called componentDidMount(). <br>
> So basically when the component is loaded, first constructor() is called, then render() is called and once this class is loaded, it will call the componentDidMount() method.

## Q: Suppose there is also the 'ComponentDidMount()' is there in the parent Component. So what will be order of this function call?

A: So when 'About' component will be loaded, it's constructor() will be called, then render() will be called, so it will see there is a class based component i.e. children, so it's this 'About' has not yet finished mounting. It will go to class based component and it will trigger it's life cycle method i.e. it's child component's. So now, first constructor() is called, then render() is called and then componentDidMount() is called.
Once the child has finished mounted properly, it will call the parent's componentDidMount() method.

```jsx
Parent Component

import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    render() {
        console.log("Parent Render");

        return (
            <div className="about-page">
                <h1>About Page</h1>
                <h3>Welcome to the About Page. This is a simple React App.</h3>
                <p>Created by Mohit Kucheriya.</p>

                <UserClass name="Mohit as Class via Props" />
            </div>
        );
    }
}

export default About;

Child Component
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };

        console.log("Child Constructor");
    }

    componentDidMount() {
        console.log("Child ComponentDidMount");
    }

    render() {
        const { name } = this.props;
        const { count } = this.state;
        console.log("Child Render");

        return (
            <div className="user-card">
                <h1>User Class</h1>
                <h2>Count: {count}</h2>

                <button
                    className="btn-class"
                    onClick={() => {
                        this.setState({ count: count + 1 });
                    }}
                >
                    Increment
                </button>
                <h3>This is a user class i.e. Class Based Component</h3>
                <p>Name of the user: {name} </p>
            </div>
        );
    }
}

export default UserClass;

Output :
Parent Constructor
Parent Render
Child Constructor
Child Render
Child ComponentDidMount
Parent ComponentDidMount
```

## Why this componentDidMount() method is important? Why used?

A: To make the API call, to fetch the data from the API, and to update the UI with the data. We use this because, first time when page loads we render the UI, then we make an API call and when the data came we re-render the UI with the new data.
