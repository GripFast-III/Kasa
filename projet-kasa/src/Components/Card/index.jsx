// import { Link } from 'react-router-dom';

// const Card = ({ housing, page }) => {
//     return (
//         <li className={`card ${page}__card`}>
//             <Link to={`/housing/${housing.id}`} className="card__link">
//                 <img className="card__img" src={housing.cover} alt={housing.title} />
//                 <h2 className="card___title">{housing.title}</h2>
//             </Link>
//         </li>
//     );
// };

// export default Card;

import React from "react";
import { Link } from "react-router-dom";

//import { getData, getDataById, getDataByProperty } from "../../Utils/get";

const Card = ({ id, housing, page }) => {
  return (
    <Link to={`/housing/${housing.id}`}>
      <div className="card" key={housing.id}>
        <img src={housing.cover} alt={housing.title} className="card-cover" />
        <div className="card-title">{housing.title}</div>
      </div>
    </Link>
  );
};

export default Card;
