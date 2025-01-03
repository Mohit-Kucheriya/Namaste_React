# Episode-06 Exploring the World

## Ep.06 - Part 01

## Q: What is Monolith Architecture?

- All-in-one-Design - <br>

  - A monolith is like a single, big -app where everything (UI, business logic, and database) is built together in one codebase

- Tightly Coupled - <br>
  - All parts of the app depend on each other, so changing one part might affect another.
- One Deploymment - <br>

  - The whole app is deployed (launched) together as one unit

- Simple to Start - <br>

  - It's easy to build and manage initially because everything is in one place.

- Hard to Scale -

  - As the app grows, it can become difficult to maintain and scale because everything is interconnected.

- Example - <br>
  - Imagine a restaurant where the kitchen, dinning, and management are all in one room. It works fine for a samll operation, but as the restaurant grows, it becomes hard to manage and scale.

## Q: What is Microservice Architecture?

- Separation of concen & single responsibility principle where each and every service has it's own job nobody is interfairing with the service.

- Small, Independent Services - <br>

  - Microservices break an app into small, separate pieces. Each piece (or service) does one specific job (e.g. user login, payment)

- Loosely Coupled - <br>

  - Each service work independently and can be developed, deployed, and scaled independently.

- Own Deployment - <br>

  - Services can be updated or deployed separately, without affecting the entire system

- Easier to Scale - <br>

  - You can scale only the services that need more resources (e.g. scale payement if many users are paying)

- Communication - <br>

  - Communication between services is done through APIs (Application Programming Interfaces)

- Example - <br>
  - Imagine a restaurant where each service (kitchen, dinning, and management) is developed and deployed separately. Each service can be scaled independently, and the restaurant can grow without affecting the other services.

## Ep.06 - Part 02

## Q: How the UI fetch the data from the API?

- There are two ways to fetch the data from the API

  1. When to make an API call?

  - As soon as our page loads, we can make an API call, wait for the response, and then update the UI with the data. Suppose API took '500ms' to respond, after '500ms' the UI will be updated with the data.

    - loads -> API call -> wait for response -> update UI

  - As soon as page loads, we will render the UI with the data from the API. We'll make an API call when the user interacts with the UI. As soon as we get the response, we'll update the UI i.e. render the new data.

    - loads -> render UI with data from API -> user interacts with UI -> API call -> wait for response -> update UI

> **NOTE:** In React we will use the second approach, which gives a better user experience.

> **NOTE:** Why react is popular, because it's render cycle are very fast.

## Ep.06 - Part 03

## useEffect()

- Takes two arguments

  - First argument is a function that will be called when the component mounts

  - Second argument is an array of dependencies. If any of the dependencies change, the effect will be called again

```js
useEffect(() => {
  // do something
}, []);
```

> **NOTE:** When will this useEffect() callback function will be called, after the component is rendered i.e. as the rendered cycle is finished, it will call the useEffect() callback function.

## Q: What is CORS?

- When a web page from one origin (e.g., https://example.com) tries to make a request to a different origin (e.g., https://api.example.com), this is considered a cross-origin request.

## Ep.06 - Part 04

## Shimmer UI

- A shimmer UI resembles the page's actual UI, so user will understand how quickly the web or mobile app will load.

- It's a loading animation that mimics the behavior of the real UI.

- It's a good way to show that the page is loading.
