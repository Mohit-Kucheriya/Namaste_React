import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                username: "Dummy",
                phone: 123,
                address: {
                    street: "Dummy",
                    city: "Dummy",
                    suite: "Dummy",
                }

            },
        };

        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Child ComponentDidMount");

        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await data.json();
        console.log(json[0]);


        this.setState({
            userInfo: json[0],
        });
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate was called`);
    }

    render() {
        // Destructuring the props
        const { name, username, phone, address, email } = this.state.userInfo;
        // const { count } = this.state;

        console.log(this.props.name + "Child Render");

        return (
            <div className="user-card border p-5">
                <h1>{name}</h1>
                <h2>{username}- {email}</h2>
                <h3>{phone}</h3>
                <p>{address.street}</p>
                <p>{address.city}</p>
                


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
