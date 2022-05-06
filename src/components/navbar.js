// Next attempt based on: https://www.youtube.com/watch?v=FuVCska64KE
import React from "react";
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
                    <img src={headerLogo} alt="Chronic Trigger Official Logo" />
                </div>
                <ul className="navbar__links">
                    <li className="navbar__link">
                        <a className="navbar__item" href="#">Home</a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__item" href="./merchListing">Merch</a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__item" href="#">EPK</a>
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