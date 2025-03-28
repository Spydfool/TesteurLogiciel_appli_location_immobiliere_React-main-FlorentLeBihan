import React from 'react';
import { useParams } from 'react-router-dom';

function Property() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails du logement</h1>
      <p>Logement ID : {id}</p>
    </div>
  );
}

export default Property;