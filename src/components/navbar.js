import React from "react";
import { Link } from "react-router-dom";

import "../style/navbar.scss";
import headerLogo from '../images/logos/Chronic_Logo_Green_Pink.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { showSidebar } from "../store/actions/sidebar";

import { useDispatch } from "react-redux";

function Navbar() {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(showSidebar());
    };
    return(
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__logo">
                    <Link to="/home">
                        <img src={headerLogo} alt="Chronic Trigger Official Logo" />
                    </Link>
                </div>
                <ul className="navbar__links">
                    <li className="navbar__link">
                        <Link to="/home" className="navbar__item">Home</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to="/merch" className="navbar__item">Merch</Link>
                    </li>
                    <li className="navbar__link">
                        <Link to="/EPK" className="navbar__item">EPK</Link>
                    </li>
                </ul>
                <GiHamburgerMenu 
                    onClick={() => handleClick()}
                    className="navbar__burger" 
                />
            </div>
        </div>
    );
}
export default Navbar;