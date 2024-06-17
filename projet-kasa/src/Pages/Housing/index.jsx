import React from "react";
import { useParams } from "react-router-dom";
import logements from "./../../../src/logements.json";
import DropdownHousing from "./../../Components/DropdownHousing";
import Carousel from "../../Components/Carousel";
import ErrorPage from "../Error";

const Housing = () => {
  const { housingId } = useParams();
  console.log("🚀 ~ housing ~ housingId:", housingId);
  // Trouver le logement correspondant
  const logement = logements.find((logement) => logement.id === housingId);
  //const [ratingStars, setRatingStars] = useState(0);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <section className="houses">
      <div className="housingContainer">
        <div className="placeCarousel">
          <Carousel pictures={logement.pictures} />
        </div>
        <div className="titleTags">
          <div className="titleLogement">
            <h3 className="logementName">{logement.title}</h3>
            <p className="logementLocation">{logement.location}</p>
          </div>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="proprioAndRate">
          <div className="proprioData">
            <div className="proprioName">{logement.host.name}</div>
            <div className="proprioPic">
              <img src={logement.host.picture} alt="Propriétaire" />
            </div>
          </div>
          <div className="rate">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={
                  index < logement.rating ? "filled-star" : "empty-star"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="dropdownsLogement">
          <div className="dropdownDescription">
            <DropdownHousing
              title="Description"
              content={logement.description}
            />
          </div>
          <div className="dropdownEquipements">
            <DropdownHousing
              title="Équipements"
              content={logement.equipments}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Housing;
