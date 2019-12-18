import "./index.scss";

import Button from "../Button";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/logo-greenthumb.svg";
import React from "react";

const startQuiz = (startApp, setFoward) => {
  startApp();
  setFoward();
};

const Home = ({ startApp, setFoward }) => {
  return (
    <div className="container background-grey">
      <div className="container-home">
        <div className="container-inside-home">
          <div className="logo">
            <Logo></Logo>
          </div>
          <h1>Find your next green friend</h1>
          <Link to="/Filter/Sunlight">
            <Button
              label={"start quiz"}
              arrow
              width={"170px"}
              weight={"600"}
              clickHandler={() => startQuiz(startApp, setFoward)}
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
