import "./index.scss";

import Button from "../Button";
import CardContainer from "../CardContainer";
import { Link } from "react-router-dom";
import React from "react";

const CardPlant = ({ id, src, name, price, options, fetchPlant }) => {
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
      <Link to="/Purchase">
        <Button
          label={"buy now"}
          outline
          transition
          width={"100%"}
          clickHandler={fetchPlant}
          plantId={id}
        ></Button>
      </Link>
    </CardContainer>
  );
};

export default CardPlant;
