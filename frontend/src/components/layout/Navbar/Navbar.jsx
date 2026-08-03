import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">

                <NavLink to="/" className="navbar__brand">
                    <img
                        src="/favicon-96x96.png"
                        alt="Fraud Detection Logo"
                        className="navbar__logo"
                    />

                    <span className="navbar__title">
                        Fraud Detection System
                    </span>
                </NavLink>

                <div className="navbar__links">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "navbar__link active"
                                : "navbar__link"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/prediction"
                        className={({ isActive }) =>
                            isActive
                                ? "navbar__link active"
                                : "navbar__link"
                        }
                    >
                        Prediction
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;