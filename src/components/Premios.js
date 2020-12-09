//Imports
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

//Import CSS
import "../stylesheet/Premios.css";

//Import Images
import one from "../images/01.jpg"
import two from "../images/02.jpg"
import three from "../images/03.jpg"
import four from "../images/04.jpg"
import five from "../images/05.jpg"
import six from "../images/06.jpg"
import seven from "../images/07.jpg"
import twingo from "../images/twingo.jpg"
import tv from "../images/tv.png"
import lava from "../images/lava.jpeg"
import aire from "../images/aire.jpeg"
import sillon from "../images/sillon.jpeg"
import sobre from "../images/sobre.png"

const Premios = () => {
  return (
        <Container className="cont">
          <h2 className="h2 upper border">importantes premios !!!</h2>
          <h4 className="h4 upper">este lugar puede ser tuyo</h4>
          <h5 className="bolt upper h5" >1er premio</h5>
          <h5 className="bolt upper h5" >casa con losa:</h5>
          <h6>Escriturada, en barrio los pioneros, Campana</h6>
        <Row className="row1">
            <Col>
             <img className="image" src={one} alt="one" />
             <img className="image" src={two} alt="two" />
            <img className="image" src={three} alt="three" />
           </Col>
        </Row>
        <Row>
          <Col>
           <img className="image" src={four} alt="four" />
           <img className="image" src={five} alt="five" />
           <img className="image" src={six} alt="six" />
          </Col>
        </Row>
          <Row>
            <Col>
              <img className="image seven" src={seven} alt="seven" />
            </Col>
          </Row>
        <Row>
          <Col>
            <h5 className="bolt upper h5" >2do premio</h5>
            <h5 className="bolt upper h5">Renault Twingo 1997:</h5>
            <h6>Todos los papeles al dia</h6>
              <img className="image twingo" src={twingo} alt="twingo" />
            <h5 className="bolt upper h5" >3er premio</h5>
            <h5 className="bolt upper h5">Tv Smart Philips 32”:</h5>
            <h6>(4 meses de uso)</h6>
              <img className="image tv" src={tv} alt="tv" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="bolt upper h5" >4to premio</h5>
            <h5 className="bolt upper h5">Lavarropas Drean 5kg:</h5>
            <h6>(4 meses de uso)</h6>
              <img className="image twingo" src={lava} alt="lava" />
            <h5 className="bolt upper h5" >5to premio</h5>
            <h5 className="bolt upper h5">Aire portátil Top house:</h5>
            <h6>(1 año de uso)</h6>
              <img className="image aire" src={aire} alt="aire" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="bolt upper h5" >6to premio</h5>
            <h5 className="bolt upper h5">Sillon de chenil 3 cuerpos</h5>
            <h6>(1 año de uso)</h6>
              <img className="image sillon" src={sillon} alt="sillon" />
            <h5 className="bolt upper h5" >7mo premio</h5>
            <h5 className="bolt upper h5">Sobre con dinero:</h5>
            <h6>Valor del sobre $15.000 (pesos Arg)</h6>
              <img className="image sobre" src={sobre} alt="sobre" />
                <h6>Valor del ticket $3.000 </h6>
                  <br/>
                <h6>Sorteo por loteria nacional matutina</h6>
                  <br/>
                <h6>fecha : 06/03/2021</h6>
          </Col>
        </Row>
        </Container>
  );
};

export default Premios;
