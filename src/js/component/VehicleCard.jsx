import React from "react";

const VehicleCard = ({ name, uid, url }) => {
  return (
    <>
      <div className="col-3">
        <div className="card" style={{ width: "18rem;" }}>
          <img
            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/${uid}.jpg`}
            class="card-img-top"
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default VehicleCard;