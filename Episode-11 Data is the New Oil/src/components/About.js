import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";



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
            <div className="about-page w-full mx-auto font-Poppins text-center mt-5 ">
                <h1 className="text-3xl font-bold mb-3">About Page</h1>
                <UserContext.Consumer>
                    {(data) => <h3 className="text-2xl font-semibold my-2 ">{data.loggedInUser}</h3>}

                </UserContext.Consumer>
                <h3 className="text-xl font-medium mb-2">Welcome to the About Page. This is a simple React App.</h3>

                <UserClass name="First" />
                {/* <UserClass name="Second" /> */}
            </div>
        );
    }
}

export default About;
