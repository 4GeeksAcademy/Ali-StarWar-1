import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function VehicleDetail() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then(response => response.json())
      .then(data => setVehicle(data.result.properties));
  }, [id]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/${id}.jpg`} 
              className="img-fluid rounded-start" 
              alt={vehicle.name} 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text"><strong>Model:</strong> {vehicle.model}</p>
              <p className="card-text"><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
              <p className="card-text"><strong>Cost in Credits:</strong> {vehicle.cost_in_credits}</p>
              <p className="card-text"><strong>Length:</strong> {vehicle.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetail;