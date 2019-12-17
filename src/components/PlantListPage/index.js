import "./index.scss";

import CardPlant from "../CardPlant";
import Error from "../Error";
import { ReactComponent as HighSunlight } from "../../assets/icons/grey/high-sun.svg";
import Loader from "../Loader";
import { ReactComponent as Logo } from "../../assets/logo/logo-greenthumb-vertical.svg";
import { ReactComponent as LowSunlight } from "../../assets/icons/grey/low-sun.svg";
import { ReactComponent as NoAnswer } from "../../assets/icons/grey/no-answer.svg";
import { ReactComponent as OneDrop } from "../../assets/icons/grey/one-drop.svg";
import Pick from "../../assets/illustrations/pick.png";
import React from "react";
import { ReactComponent as ThreeDrops } from "../../assets/icons/grey/three-drops.svg";
import { ReactComponent as Toxic } from "../../assets/icons/grey/toxic.svg";
import { ReactComponent as TwoDrops } from "../../assets/icons/grey/two-drops.svg";

const plantOptionsArray = (sun, water, toxicity) => {
  const array = [];

  switch (toxicity) {
    case true:
      array.push(Toxic);
      break;
    default:
      break;
  }

  switch (sun) {
    case "no":
      array.push(NoAnswer);
      break;
    case "low":
      array.push(LowSunlight);
      break;
    case "high":
      array.push(HighSunlight);
      break;
    default:
      break;
  }

  switch (water) {
    case "daily":
      array.push(ThreeDrops);
      break;
    case "regularly":
      array.push(TwoDrops);
      break;
    case "rarely":
      array.push(OneDrop);
      break;
    default:
      break;
  }

  return array;
};

const PlantListPage = ({ plants, fetchStatus, fetchPlant, resetFilters }) => {
  return (
    <div className="container background-grey">
      <div className="logo-bar">
        <Logo></Logo>
        <div className="green-line"></div>
      </div>
      <div className="container-inside">
        {fetchStatus.status === 200 ? (
          <div className="pick-container">
            <img src={Pick} alt=""></img>
            <h1>Our picks for you</h1>
            <div className="list">
              {plants.map(plant => (
                <CardPlant
                  key={plant.id}
                  id={plant.id}
                  src={plant.url}
                  name={plant.name}
                  price={plant.price}
                  options={plantOptionsArray(
                    plant.sun,
                    plant.water,
                    plant.toxicity
                  )}
                  fetchPlant={fetchPlant}
                ></CardPlant>
              ))}
            </div>
          </div>
        ) : fetchStatus.status === 404 ? (
          <Error
            picUrl={Pick}
            errorMessage={fetchStatus.error}
            resetFilters={resetFilters}
          ></Error>
        ) : fetchStatus.status === 422 ? (
          <Error
            errorMessage={"Unfortunately, an error ocurred."}
            resetFilters={resetFilters}
          ></Error>
        ) : (
          <Loader></Loader>
        )}
      </div>
    </div>
  );
};

export default PlantListPage;
