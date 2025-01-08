import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };

        console.log(this.props.name + "Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.name + "Child ComponentDidMount");
    }

    render() {
        // Destructuring the props
        const { name } = this.props;
        const { count } = this.state;

        console.log(this.props.name + "Child Render");

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
