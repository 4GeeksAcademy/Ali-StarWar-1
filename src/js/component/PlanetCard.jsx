import React, { useState } from "react";
import { Link } from 'react-router-dom';

const PlanetCard = ({ uid, name, url }) => {
  const [imgUrl, setImgUrl] = useState(
    `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
  );

  return (
    <>
      <div className="col-3">
        <div className="card" style={{ width: "18rem;" }}>
          <img
            src={imgUrl}
            class="card-img-top"
            onError={() => {
              setImgUrl("https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937");
            }}
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/planets/${uid}`} className="btn btn-primary">
            Go somewhere
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlanetCard;