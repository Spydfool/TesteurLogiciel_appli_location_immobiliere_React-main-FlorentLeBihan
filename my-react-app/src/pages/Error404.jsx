import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Error404() {
  return (
    <div className="error404">
      <h1 className="error404-code">404</h1>
      <p className="error404-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error404-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;
