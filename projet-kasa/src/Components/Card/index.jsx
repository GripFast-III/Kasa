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
//import { getData, getDataById, getDataByProperty } from "../../Utils/get";

const Card = ({ id, cover, title }) => {
  return (
    <div className="card" key={id}>
      <img src={cover} alt={title} className="card-cover" />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
