import React from 'react';

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

export default Slider;