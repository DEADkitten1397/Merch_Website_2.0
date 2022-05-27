import React from "react";

import Navbar from '../navbar';
import RotatingBanner from '../rotatingBanner';
import MerchHighlights from '../merchHighlights';
import Footer from '../footer';

// import "../../style/main.scss";

const Home = () => {
    return (
      <div>
        <Navbar />
        <RotatingBanner />
        <MerchHighlights />
        <Footer />
      </div>
    )
}

export default Home;