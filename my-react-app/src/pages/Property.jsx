import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Property() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Appel à l'API pour récupérer les données du logement
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Logement introuvable');
        }
        return response.json();
      })
      .then((data) => setLogement(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{logement.description}</p>
      <p>Localisation : {logement.location}</p>
      <h2>Équipements :</h2>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h2>Tags :</h2>
      <ul>
        {logement.tags.map((tag, index) => (
          <li key={index} style={{ display: 'inline', marginRight: '10px', padding: '5px', background: '#eee', borderRadius: '5px' }}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Property;