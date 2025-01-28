import { useState } from "react"
const UserFunction = ({ name }) => {

    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>User Function</h1>
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h3>This is a user function i.e. Functional Component</h3>
            <p>Name of the user: {name} </p>
        </div>
    )
}

export default UserFunction