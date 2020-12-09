//Imports
import React from "react";

//Import CSS
import "../stylesheet/Header.css";

//Import Images
import cero from "../images/00.jpg"

const Header = () => {
  return (
    <div className="row">
      <div className="col-12 bk">
        <h1 className="text-center colorHeader">www.elgrandia.com.ar</h1>
        <h7 className="d-block">LOS BIEN AFORTUNADOS</h7>
        <img className="cero" src={cero} alt="cero" />
      </div>
    </div>
  );
};

export default Header;
