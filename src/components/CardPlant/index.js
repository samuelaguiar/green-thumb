import "./index.scss";

import Button from "../Button";
import CardContainer from "../CardContainer";
import React from "react";

const CardPlant = ({ src, name, price, options }) => {
  return (
    <CardContainer classes={`card-plant`}>
      <img src={src} className="plant-pic" alt={name}></img>
      <h5>{name}</h5>
      <div className="line">
        <span>${price}</span>
        <div className="options">
          {options.map((Option, index) => (
            <div className="option" key={index}>
              <Option></Option>
            </div>
          ))}
        </div>
      </div>
      <Button label={"buy now"} outline transition width={"100%"}></Button>
    </CardContainer>
  );
};

export default CardPlant;
