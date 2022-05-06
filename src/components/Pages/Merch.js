import React from "react";

import Navbar from '../navbar';
import MerchListing from '../merchListing';
import Sidebar from '../sidebar';
import Footer from '../footer';


const Merch = () => {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <MerchListing />
        <Footer />
      </div>
    );
};

export default Merch;