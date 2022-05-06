import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/merchHighlights.scss"

import Tongues from '../images/merch/highlights/Intertwined_Tongues.png';


class MerchHighlight extends Component {
    render() {
        return (
            <div className='merchHighlight'>
                <div className='merchArtwork'>
                    <Link to="#">
                        <img src={Tongues} alt="Intertwined Tongues"/>
                    </Link>
                    <label>Intertwined Tongues</label>
                </div>
            </div>
        )
    }
}

export default MerchHighlight;