import React, { useEffect } from "react";

//import Banner from "./../../Components/Banner";
//import Dropdown from "./../../Components/Dropdown";

const about_content = [
  {
    title: "Fiabilité",
    text: "Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
  },
  {
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage ntrainera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N`hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l`hôte qu`au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Banner page="About" /> */}
      <section className="about">
        {about_content.map((content, index) => (
          //   <Dropdown
          //     key={`about-${index}-${content.title}`}
          //     name={content.title}
          //     value={content.text}
          //     page="about"
          //   />
          <h1 key={`about-${index}-${content.title}`}>{content.title}</h1>
        ))}
      </section>
    </>
  );
};

export default About;
