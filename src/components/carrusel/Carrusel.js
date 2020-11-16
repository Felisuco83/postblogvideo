import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";

export default class Carrusel extends Component {
  next = () => {
    return <h3 style="border: 1px solid black;"> Siguiente </h3>;
  };
  render() {
    return (
      <div className="mt-5">
        <Carousel interval={2500} fade={true}>
          <Carousel.Item>
            <img src="/images/setas/setas1.jpg" />
            <Carousel.Caption>
              <h3>Boletus</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/setas/setas2.jpg" />
            <Carousel.Caption>
              <h3>Amanita Muscaria</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/setas/setas3.jpg" />
            <Carousel.Caption>
              <h3>Níscalo</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
