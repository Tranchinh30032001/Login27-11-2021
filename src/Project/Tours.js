import React from "react";
import Tour from "./Tour";
function Tours({ tours, notInterested }) {
  return (
    <div className="container">
      {tours.map((tour, index) => {
        return <Tour key={index} {...tour} notInterested={notInterested} />;
      })}
    </div>
  );
}

export default Tours;
