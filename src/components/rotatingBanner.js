import React, { Component } from 'react';
import Feature from '../images/banners/Kronos_News_Feature_Resized.jpg'

import "../style/main.scss"
import "../style/rotatingBanner.scss"

class RotatingBanner extends Component {
    render() {
        return (
            <div className='rotatingBanner'>
                <img src={Feature} alt="Kronos Mortus News Feature" />
            </div>
        )
    }
}

export default RotatingBanner;
