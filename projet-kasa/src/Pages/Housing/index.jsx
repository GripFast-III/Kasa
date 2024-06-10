import React from "react";
import { useParams } from "react-router-dom";

const housing = () => {
  const { housingId } = useParams();
  console.log("🚀 ~ housing ~ housingId:", housingId);
  return (
    <>
      <section className="houses">
        <div className="housingContainer">
          <div className="carousel"></div>
        </div>
      </section>
    </>
  );
};

export default housing;
