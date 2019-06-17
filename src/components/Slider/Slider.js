import React from 'react';
import PropTypes from "prop-types";

const Slider = ({sliderValue}) => {
    return(
        <div className="slider-container">
           <span className='slider-title'>Popularity</span>
            <div className="slider">
                <div className="slide-btn" style={{left: sliderValue}}></div>
                <div className="slide-line"></div>
            </div>
        </div>
    )
}
Slider.propTypes = {
    sliderValue: PropTypes.number.isRequired
}
export default Slider;