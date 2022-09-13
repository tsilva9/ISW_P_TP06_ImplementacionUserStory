import React from "react";
import "../../css/style.css";
import bars from "../../resources/bars.svg";
import flecha from "../../resources/flecha.svg";
import DeliverEat_Logo from "../../resources/DeliverEat_Logo.png";

const Navbar = () => {
  return (
    <nav className="c-nav">
      <img className="c-nav__flecha" src={flecha} alt="flecha" />
      <img className="c-nav__logo" src={DeliverEat_Logo} alt="logo" />
      <img className="c-nav__bars" src={bars} alt="bars" />
    </nav>
  );
};

export default Navbar;
