# Episode 05 - Let's Get Hooked

> **Note:** Everything React can do, can be done by using HTML, CSS, JS. React is just a library that helps us to do things easier.

## Ep.05 - Part 01

> **Note:** Make separate files for each component.

> **Note:** In App.js we are using Header Component, and this Header Component is no longer in the App.js file. We have to import it from the Header.js file.

> **Note:** Whenver we have hard-coded data, never keep it in the component file i.e. images URL also. Keep them in different folder called utils where create a file called constants.js and keep all the constants there.

1. **Two types of Export/Import**

   - Default Export
   - Named Export

```javascript
Default Export/Import
export default App;
import App from "./App";
```

```javascript
Named Export/Import
export const App = () => {
  return <h1>Hello World</h1>;
};
import { App } from "./App";
```

## Ep.05 - Part 02

> **Note:** Make page dynamic i.e. interactive <br>
> React is fast in DOM Manipulation

1. **React Hooks**

   - useState()
   - useEffect()

2. **useState() Hook**

   - useState() returns an array of two elements, the first element is the state and the second element is the setter function.
   - whatever the initial value we pass to the useState, it will be the initial state.
   - Whenever we change the state, it will re-render the component.

```javascript
const [state, setState] = useState(initialState);
```

3. **What is the Virtual DOM?**

   - The Virtual DOM is a JavaScript object that mimics the structure of the real DOM but exists in memory.
   - When something changes in your React app (like state or props), React:
     - Creates a new virtual DOM tree.
     - Compares this new tree to the previous one using a process called reconciliation.
     - Updates only the parts of the real DOM that have changed.

4. **Reconciliation: How React Updates the UI**

   - Reconciliation is React's process of comparing two versions of the virtual DOM (the old and the new) to find differences.
   - Once differences (or "diffs") are identified, React updates only the necessary parts of the real DOM, making the process faster and more efficient.
   - Example:

   ```javascript
      If you change the text in a <p> tag, React won’t re-render the entire <div> containing the <p>; it’ll just update the text in that specific tag.
   ```

5. **The Diff Algorithm**

- React uses the diff algorithm to determine the changes between the old and new virtual DOM trees.
- Key Principles of the Diff Algorithm:

```
  - Same-Level Comparison: React compares elements at the same level of the DOM tree.
  - Type Check: If the element type is the same (e.g. <div> to <div>) React reuses the existing element and updates its attributes or children.
  - Keys for List Items: For dynamic lists (e.g. <ul>), React uses keys to uniquely identify elements, ensuring efficient updates when items are added or removed.:
```

6. **React Fiber: The Backbone of Reconciliation**

- As React apps grew more complex, React introduced Fiber in 2017. It’s a reconciliation algorithm designed to:
  - Break large rendering tasks into smaller, manageable chunks.
  - Prioritize updates based on their importance (e.g., animations are prioritized over non-critical updates).
- Fiber allows React to pause and resume rendering work, improving performance, especially in apps with complex UIs.

7. **How Everything Connects - When a React app updates (due to state or props):**

- Virtual DOM: React creates a new version of the virtual DOM tree.
- Reconciliation: The new virtual DOM tree is compared to the old one using the diff algorithm.
- Fiber: Handles the reconciliation process efficiently, ensuring smooth updates.
- Real DOM: Only the parts of the real DOM that need updating are changed.

> **Note:** Finding out the difference between two HTML code is tough, finding out the difference between two object is fast and JavaScript is fast <br>
> React can efficiently, finds out the difference between virtual DOM and update the UI

> **Note:** React keeps track on the state variable, whenever this variable updates, react will triggered it's diff alogorithm, it keeps the UI layer and the data layer in sync.
