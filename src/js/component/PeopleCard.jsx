import React from "react";


const PeopleCard = ({ name, uid, url }) => {


    return (
        <>
        <div className="col-3">
        <div className="card" style={{width: "18rem;"}}>
  <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} 
  class="card-img-top" 
  alt={name} 
  />
  <div className="card-body">
    <h6 className="card-title">{name}</h6>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>  
        
        </>
    );
}
export default PeopleCard;