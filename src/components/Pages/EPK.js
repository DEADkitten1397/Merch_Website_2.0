import React from "react";
import ImgOne from "../../images/pdf/CHRONIC_TRIGGER_EPK-1.png";
import ImgTwo from "../../images/pdf/CHRONIC_TRIGGER_EPK-2.png";
import ImgThree from "../../images/pdf/CHRONIC_TRIGGER_EPK-3.png";
import ImgFour from "../../images/pdf/CHRONIC_TRIGGER_EPK-4.png";
import ImgFive from "../../images/pdf/CHRONIC_TRIGGER_EPK-5.png";
import ImgSix from "../../images/pdf/CHRONIC_TRIGGER_EPK-6.png";

import "../../style/epk.scss"
import Navbar from "../navbar";
import Footer from "../footer";

const EPK = () => {
    return (
        <div className="EPKwrapper">
            <Navbar/>
            <div className="EPKimages">
                <img src={ImgOne} className="img" alt="Page One"></img>
                <img src={ImgTwo} className="img" alt="Page Two"></img>
                <img src={ImgThree} className="img" alt="Page Three"></img>
                <img src={ImgFour} className="img" alt="Page Four"></img>
                <img src={ImgFive} className="img" alt="Page Five"></img>
                <img src={ImgSix} className="img" alt="Page Six"></img>
            </div>
            <Footer/>
        </div>
    );
};

export default EPK;