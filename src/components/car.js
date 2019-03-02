import React from "react";
import carBody from "../img/car-body.png";
// import carFrontWheel from '../img/car-front-wheel.png';
// import carBackWheel from '../img/car-back-wheel.png';
import carWheel from "../img/car-wheel.png";

export default function Car() {
  return (
    <div className="car">
      <img id="car-front-wheel" src={carWheel} alt="car-front-wheel" />
      <img id="car-back-wheel" src={carWheel} alt="car-back-wheel" />
      <img id="car-body" src={carBody} alt="car-body" />
    </div>
  );
}
