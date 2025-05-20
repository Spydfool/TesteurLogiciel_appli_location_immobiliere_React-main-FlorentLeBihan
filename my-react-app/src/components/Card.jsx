import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Card = ({ id, title, cover }) => (
  <Link to={`/property/${id}`} className="card">
    <div className="card-image" style={{ backgroundImage: `url(${cover})` }}>
      <div className="card-title">{title}</div>
    </div>
  </Link>
);

export default Card;
