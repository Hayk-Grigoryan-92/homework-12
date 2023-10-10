import React, { useState } from "react";
import "./style.scss";


export const SliderComponent = ({ slide }) => {
  let [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slide.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slide.length - 1 : current - 1);
  };


  return (
  
    <div className="sliderContainer">
      <button className="changeButton" onClick={prevSlide}>
        Previus
      </button>
      <div className="slider">
        {slide.map((item, index) => {
          return (<div className="container">
              <div key={index} className="slide">
                {index === current && (
                  <div className="currentSlider" style={{ backgroundImage: `url(${item})` }}></div>
                )}</div>
          </div>);
        })}
      </div>
      <button className="changeButton" onClick={nextSlide}>
        Next
      </button>
    </div>

  );
};
