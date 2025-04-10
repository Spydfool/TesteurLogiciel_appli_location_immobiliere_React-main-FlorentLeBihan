import React, { useState } from "react";
import "../styles.css";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <button className="slideshow-arrow left" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="slideshow-arrow right" onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
      {pictures.length > 1 && (
        <div className="slideshow-counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
