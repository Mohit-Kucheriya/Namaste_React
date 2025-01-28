import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // console.log("Header rendered");

    // In no dependecy array is defined, then the useEffect() is called every time when the component is rendered

    // If there is an empty array = [], then the useEffect() is only called once on initial render i.e. just once. Even if the component is rendered multiple times, it will not called.
    useEffect(() => {
      
    }, []);


    const { loggedInUser } = useContext(UserContext)

    return (
        <div className="flex justify-between items-center px-4 py-2 bg-white font-Poppins border-b-2 border-gray-200">
            <div className="w-32">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>

            <div >
                <ul className="flex items-center space-x-8 text-lg font-medium">
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
                        className="btn-header px-3 py-1 bg-gray-300 rounded-md w-40 max-w-full"
                    >
                        {btnName}
                    </button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
