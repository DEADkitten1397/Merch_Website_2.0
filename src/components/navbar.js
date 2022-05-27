import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

import "../style/navbar.scss";
import headerLogo from '../images/logos/Chronic_Logo_Green_Pink.png';
import { GiHamburgerMenu } from "react-icons/gi";
// import { showSidebar } from "../store/actions/sidebar";

import { useDispatch } from "react-redux";

function Navbar() {
    // const dispatch = useDispatch();

    // const handleClick = () => {
    //   dispatch(showSidebar());
    // };
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <nav className="navbar__wrapper">
            <a href="/home" className="navbar__logo">
                {/* <Link to="/home">
                    <img src={headerLogo} alt="Chronic Trigger Official Logo" />
                </Link> */}
                <img src={headerLogo} alt="Chronic Trigger Official Logo" />
            </a>
            <button className="navbar__burger" onClick={() => { setIsNavExpanded(!isNavExpanded); }} >
                <GiHamburgerMenu/>
            </button>
            <div className={ isNavExpanded ? "navbar__links expanded" : "navbar__links" }>
                <ul>
                    <li>
                        {/* <Link to="/home" className="navbarItem">Home</Link> */}
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        {/* <Link to="/merch" className="navbarItem">Merch</Link> */}
                        <a href="/merch">Merch</a>
                    </li>
                    <li>
                        {/* <Link to="/EPK" className="navbarItem">EPK</Link> */}
                        <a href="/EPK">EPK</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;

                {/* <GiHamburgerMenu 
                    onClick={() => handleClick()}
                    className="navbar__burger" 
                /> */}
