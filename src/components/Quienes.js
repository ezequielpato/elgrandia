//Imports
import React from "react";

//Import CSS
import "../stylesheet/Quienes.css";

const Quienes = () => {
  return (
    <div className="row">
        <h2 className="quienes">¿Quienes somos?</h2>
          <iframe width="90%" height="315" src="https://www.youtube.com/embed/liAbyxQyiNk?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p className="p">Somos <span className="bolt">Giannina</span> y <span className="bolt">Ariel</span></p>
          <p className="p">Después de muchos intentos por vender nuestra propiedad y no lograrlo por la situación económica del país, se nos ocurrio sortear la “llave” de ella para que alguien pueda cumplir el sueño de su vivienda propia.</p>
          <p className="p2 bolt">Nos ayudas?</p>
    </div>
  );
};

export default Quienes;
