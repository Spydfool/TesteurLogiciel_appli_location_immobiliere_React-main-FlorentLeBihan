import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="card">
      <div className="card-image" style={{ backgroundImage: `url(${cover})` }}>
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
}

export default Card;
