import React, {useState} from "react";


const PlanetCard = ({ uid, name, url }) => {
const [imgUrl, setImgUrl] = useState(`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`)

    return (
        <>
        <div className="col-3">
        <div className="card" style={{width: "18rem;"}}>
  <img src={imgUrl}
  class="card-img-top"
  onError = {() => {
    setImgUrl("https://via.placeholder.com/426x426")
  }} 
  alt={name}
  />
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