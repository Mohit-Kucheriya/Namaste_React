# Episode 04 - Talk is Cheap, Show me the code

## Ep.04 - Part 01

> **NOTE**: If you are asked to build any app - Plan.  
> When you are building the app, you will be thinking about the flow of the app. You should know exactly what you want to do and how you want to do it. What is the process
> First make a wireframe of the app.

1. **Let's do a low level planning** - We can discuss what component can app have

   - Header
     - Logo
     - Nav-Items
   - Body
     - Search-Bar
     - Restaurant-Container
       - Restaurant-Card
         - Restaurant-Card-Image
         - Restaurant-Card-Title
   - Footer

## Ep.04 - Part 02

1. **Props (Properties)** - <br>
   Pass to the component, to dynamically sent the data, Props are just like the arguments of a function.

```javascript
const App = (props) => {
  return <h1>Hello {props.name}</h1>;
};
```

> **Note:** Passing a prop to a component is just passing an argument to a function.

> **Note:** React takes all the props, we are passing and wrap it inside an object, and it will pass it i.e. at the end it is the JS object.

> **Note:** When we have to dynamically passing some data to a component, we passed in as a prop. We can use prop, via prop.name or destructuring them on the fly. Destructuring is a way of taking the prop and assigning it to a variable.

> **Note:** Destructuring is the JavaScript thing.

2. **Config Driven UI** - Core Industry Concept <br>
   Controlling your UI, how the UI looks like, using data, using config, and this config comes from backend. <br>
   Example: When we open swiggy App, there are the offers on different things, these offers are available for that location eg in Bengaluru, There might be different offers for different location.

> **Note:** Our website is driven by data, this is the config driven UI.

3. **Why we use key?** <br>
   Whenever we are looping over an array, we need to give a unique key to each element, so that React can identify which element is which. When there are components, at the same level these components need to have unique keys. If there is one more new component added to the container, react does not know, at what level it should render the new component. So we need to give it a unique key. If not provided, react will clean the whole container and render it again.

```javascript
const App = () => {
  const restaurants = [
    {
      id: 1,
      name: "McDonald's",
      image: "https://www.mcdonalds.com/us/en/i/vogue/desktop/McDonalds.gif",
    },
    {
      id: 2,
      name: "KFC",
      image: "https://www.kfc.com/us/en/i/kfc/desktop/Kfc.gif",
    },
    {
      id: 3,
      name: "Pizza Hut",
      image: "https://www.pizzahut.com/us/en/i/pizzahut/desktop/PizzaHut.gif",
    },
  ];

  return (
    <div>
      {restaurants.map((restaurant) => {
        return (
          <div key={restaurant.id}>
            <h1>{restaurant.name}</h1>
            <img src={restaurant.image} alt={restaurant.name} />
          </div>
        );
      })}
    </div>
  );
```
> **Note:** Never use index as key, because it will change, when the array changes.
