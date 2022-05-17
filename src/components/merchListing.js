import React from "react";
// import { Button } from "react-router-dom";

import Shoes from '../images/merch/listings/Intertwined_Tongues_Shoes.jpg';
import "../style/merchListing.scss"

function Merch() {
    return (
        <div className="merchListing">
            <div className="merchImage">
                <img src={Shoes} alt="Intertwined Tongues Shoes" />
            </div>
            <div className="merchDescription">
                <h1>Intertwined Tongues Shoes</h1>
                <p>These extremely comfortable high-top canvas sneakers with a high quality print are made to last and to impress - a truly original way to express oneself and inspire new fashion trends on the go.</p>
                <h2>$45.00</h2>
            </div>
            {/* <div className="merchButton">
                <input type={Button}>Buy Now!</input>
            </div> <----doesn't work*/}
            {/* <div className="merchButton">
                Buy Now!
            </div> <----works*/}
        </div>
    )
}

export default Merch;