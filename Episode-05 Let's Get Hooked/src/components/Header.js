import { LOGO_URL } from "../utils/constants"
export const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;