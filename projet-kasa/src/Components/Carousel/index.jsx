import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "./../../../src/logements.json";
import ChevronLeft from "./../../Assets/left-chevron.png";
import ChevronRight from "./../../Assets/right-chevron.png";

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
      <div className="left">
        <img
          src={ChevronLeft}
          alt="Précédent"
          className="carousel__chevron carousel__chevron--left"
          onClick={handlePrev}
        />
      </div>
      <div className="pictures">
        <img
          src={pictures[currentIndex]}
          alt={`Logement ${currentIndex + 1}`}
          className="carousel__image"
        />
        <div className="counter">
          <div className="carousel__counter">
            {currentIndex + 1} / {pictures.length}
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src={ChevronRight}
          alt="Suivant"
          className="carousel__chevron carousel__chevron--right"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Carousel;
