import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
export const Header = () => {
    const [btnName, setBtnName] = useState("Login")


    return (
        <div className="header">
            <div className="header-logo">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }} className="btn-header">{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;