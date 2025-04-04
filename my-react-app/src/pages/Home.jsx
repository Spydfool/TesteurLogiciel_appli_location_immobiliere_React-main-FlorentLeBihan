import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import backgroundImage from '../assets/background-home.png';
import '../styles.css';

function Home() {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des logements');
        }
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (logements.length === 0) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="home">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards-wrapper">
        <div className="cards-container">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;