import './CSS/carousel.css';
import React, { useState, useEffect } from 'react';

interface Props {
  images: string[];
  interval: number;
}
const Carousel: React.FC<Props> = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(slideInterval);
  }, [images, interval]);

  return (
    <div style={{height:"100%"}} className="carousel-container">
      <img src={images[currentIndex]} alt="slide" className="carousel-image" />
      <button className="carousel-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>Next</button>
      <button className="carousel-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>Prev</button>
    </div>
  );
};

export default Carousel;