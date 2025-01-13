import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // console.log("Header rendered");

    // In no dependecy array is defined, then the useEffect() is called every time when the component is rendered

    // If there is an empty array = [], then the useEffect() is only called once on initial render i.e. just once. Even if the component is rendered multiple times, it will not called.
    useEffect(() => {
        // console.log(
        //     "useEffect() will be called every time when the component is rendered"
        // );
    }, []);

    return (
        <div className="header">
            <div className="header-logo">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {useOnlineStatus ? "✅" : "❌"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <button
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                        className="btn-header"
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
