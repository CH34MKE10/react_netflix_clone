import React, { useState, useEffect } from "react";
import "./Nav.css";
import netflix_logo from "./images/netflix_2.png";
import user_logo from "./images/user_2.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflix_logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={user_logo} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
