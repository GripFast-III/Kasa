import React from "react";
import { getData } from "./../../Utils/get";
import Card from "./../Card";

const housing = await getData("/logements.json");

const Gallery = ({ page }) => {
  return (
    <ul className={`gallery ${page}__gallery`}>
      {housing.map((item, index) => {
        return <Card key={item.id} housing={item} page={page} />;
      })}
    </ul>
  );
};

export default Gallery;

// import React, { useState, useEffect } from "react";
// import Card from "./../Card";
// import { getData } from "./../../Utils/get";

// const Gallery = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData();
//         if (Array.isArray(result)) {
//           // Vérifie si result est un tableau
//           setData(result);
//         } else {
//           throw new Error(
//             "Les données récupérées ne sont pas sous forme de tableau."
//           );
//         }
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading data: {error.message}</div>;
//   }

//   return (
//     <div className="gallery">
//       {data.map((item) => (
//         <Card
//           key={item.id}
//           id={item.id}
//           cover={item.cover}
//           title={item.title}
//         />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
