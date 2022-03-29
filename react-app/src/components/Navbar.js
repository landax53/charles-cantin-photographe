import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show-nav");
  }
  function closeMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show-nav");
  }

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavLink
          to="/"
          className={(navbar) =>
            navbar.isActive ? "navbar__link-active first" : "navbar__link first"
          }
          onClick={closeMenu}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/galerie"
          className={(navbar) =>
            navbar.isActive
              ? "navbar__link-active second"
              : "navbar__link second"
          }
          onClick={closeMenu}
        >
          Galerie
        </NavLink>
        <NavLink
          to="/tarifs-prestations"
          className={(navbar) =>
            navbar.isActive ? "navbar__link-active third" : "navbar__link third"
          }
          onClick={closeMenu}
        >
          Tarifs & Prestations
        </NavLink>
        <NavLink
          to="/contact"
          className={(navbar) =>
            navbar.isActive ? "navbar__link-active four" : "navbar__link four"
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>

      <button className="burger" onClick={toggleMenu}>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
