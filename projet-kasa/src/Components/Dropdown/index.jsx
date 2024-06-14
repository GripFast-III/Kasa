import { useState, useRef, useEffect } from "react";
import Chevron from "./../../Assets/down-chevron.png";

export default function Collapse(props) {
  console.log("🚀 ~ Collapse ~ props:", props);
  const [toggle, setToggle] = useState(false); // Définit le state du toggle (et false par défaut)
  const [heightEl, setHeightEl] = useState(); // Définit le state de la hauteur du collapse

  const toggleState = () => {
    // Définit la fonction toggleState qui modifie la valeur toggle au clic
    setToggle(!toggle);
  };

  const refHeight = useRef(); // Récupère et conserve la valeur de hauteur du collapse déplié

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    // Affiche le dropdown replié par défaut
    <div className={`collapse ${props.aboutStyle}`}>
      {" "}
      <div onClick={toggleState} className="collapse__visible">
        <img
          className={toggle ? "chevron rotated" : "chevron"}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>{" "}
      </div>
    </div>
  );
}
