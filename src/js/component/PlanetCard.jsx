import React from "react";


const PlanetCard = ({ uid, name, url }) => {


    return (
        <>
        <div className="col-3">
        <div className="card" style={{width: "18rem;"}}>
  <img src="..." class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
       </div> 
        
        </>
    );
}
export default PlanetCard;