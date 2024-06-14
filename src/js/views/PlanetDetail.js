import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function PlanetDetail() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then(response => response.json())
      .then(data => setPlanet(data.result.properties));
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
              className="img-fluid rounded-start" 
              alt={planet.name} 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text"><strong>Diameter:</strong> {planet.diameter}</p>
              <p className="card-text"><strong>Climate:</strong> {planet.climate}</p>
              <p className="card-text"><strong>Gravity:</strong> {planet.gravity}</p>
              <p className="card-text"><strong>Terrain:</strong> {planet.terrain}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetail;