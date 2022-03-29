import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-container">
        <h5>Suivez-moi sur mes réseaux : </h5>
        <FontAwesomeIcon
          icon={faTwitter}
          className="brands-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faYoutube}
          className="brands-icon"
        ></FontAwesomeIcon>
      </div>
      <div className="navlink-container">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
        >
          Politique de confidentialité
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
        >
          Contact
        </NavLink>
      </div>
      <div className="rights-container">
        <h6>Charles CANTIN 2022 - © Tous droits réservés</h6>
      </div>
    </div>
  );
};

export default Footer;
