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

                <UserClass name="First" />
                {/* <UserClass name="Second" /> */}
            </div>
        );
    }
}

export default About;
