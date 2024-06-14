import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function PeopleDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(response => response.json())
      .then(data => setPerson(data.result.properties));
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
              className="img-fluid rounded-start" 
              alt={person.name} 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text"><strong>Height:</strong> {person.height}</p>
              <p className="card-text"><strong>Mass:</strong> {person.mass}</p>
              <p className="card-text"><strong>Hair Color:</strong> {person.hair_color}</p>
              <p className="card-text"><strong>Skin Color:</strong> {person.skin_color}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleDetail;