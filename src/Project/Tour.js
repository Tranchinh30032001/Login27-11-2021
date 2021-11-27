import React from "react";
import { useState } from "react";

function Tour({ name, info, image, price, id, notInterested }) {
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="content">
      <img src={image} alt={name} />
      <div className="container-content">
        <div className="title">
          <h2>{name}</h2>
          <h3>{price}</h3>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)} ...`}
          {readmore ? (
            <input
              type="submit"
              value=" See less"
              onClick={() => setReadmore(!readmore)}
            />
          ) : (
            <input
              type="submit"
              value="Read more"
              onClick={() => setReadmore(!readmore)}
            />
          )}
        </p>
      </div>
      <button onClick={() => notInterested(id)}>Not interested</button>
    </div>
  );
}

export default Tour;
