import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "./../../../src/logements.json";

const Carousel = () => {
  const { housingId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const logement = logements.find((logement) => logement.id === housingId);
    if (logement) {
      setPictures(logement.pictures);
    }
  }, [housingId]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (pictures.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--left"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="carousel__image"
      />
      <button
        className="carousel__button carousel__button--right"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
