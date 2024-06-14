import React from "react";
import { Link } from 'react-router-dom';

const PeopleCard = ({ name, uid, url }) => {


  return (
    <>
      <div className="col-3">
        <div className="card" style={{ width: "18rem;" }}>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            class="card-img-top"
            alt={name}
          />
          <div className="card-body">
            <h6 className="card-title">{name}</h6>
            <Link to={`/people/${uid}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
export default PeopleCard;