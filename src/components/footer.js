import React from 'react';
import footerLogo from '../images/logos/Chronic_Logo_White.png';
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi"
import { Link } from 'react-router-dom';

import "../style/main.scss"
import "../style/footer.scss"


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__links'>
                <Link to="https://www.facebook.com/ChronicTriggerband" className='footer__link'>
                    <BsFacebook />
                </Link>
                <Link to="https://www.youtube.com/c/ChronicTriggerOfficial" className='footer__link'>
                    <BsYoutube />
                </Link>
                <Link to="https://www.instagram.com/chronictriggerofficial/" className='footer__link'>
                    <BsInstagram />
                </Link>
                <Link to="https://open.spotify.com/artist/1rF9m8JfLWSu3VE0cibhcr?si=jzgx4qlmSVWnpW7r50WCqQ" className='footer__link'>
                    <BsSpotify />
                </Link>
            </div>
            <div className='footer__logo'>
                <img src={footerLogo} alt="Chronic Trigger Logo" />
            </div>
            <div className='footer__copyright'>
                <p><BiCopyright /> 2022 DEADkitten1397 | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;