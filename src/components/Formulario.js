//Importsfire
import React from "react";
import emailjs from "emailjs-com"

//Import CSS
import "../stylesheet/Formulario.css";

const Formulario = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_2fc1r7j', e.target, 'user_kyd9VdqNn4q3U5CYqHAxE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="container">
        <h5 className="h5form">Formulario de contacto</h5>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Nombre:" required name="name"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Dirección de correo:" required name="email"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Celular:" required name="cel"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto message">
              <input type="text-area" className="form-control" placeholder="Mensaje:" required name="message"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="submit" className="btn btn-info sub" value="Enviar Mensaje !" required name="message"/>
            </div>
          </div>
        </form>
    </div>
  );
};

export default Formulario;