//Imports
import React from "react";

//Import CSS
import "../stylesheet/Bases.css";
import pdf from '../images/pdf.png'
import file from '../files/Puntos_a_tener_en_cuenta.pdf'

const Bases = () => {

return (
    <div className="container">
      <div className="row">
        <div className="col-10 divpdf">
          <img className="pdf" src={pdf}></img>
          <a href={file} download="Puntos a tener en cuenta.pdf">Puntos a tener en cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default Bases;