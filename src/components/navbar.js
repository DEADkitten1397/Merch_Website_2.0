import React from "react";
import { useState } from "react";

import "../style/navbar.scss";
import headerLogo from '../images/logos/Chronic_Logo_Green_Pink.png';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <nav className="navbar__wrapper">
            <a href="/home" className="navbar__logo">
                <img src={headerLogo} alt="Chronic Trigger Official Logo" />
            </a>
            <button className="navbar__burger" onClick={() => { setIsNavExpanded(!isNavExpanded); }} >
                <GiHamburgerMenu/>
            </button>
            <div className={ isNavExpanded ? "navbar__links expanded" : "navbar__links" }>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/merch">Merch</a>
                    </li>
                    <li>
                        <a href="/EPK">EPK</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;

