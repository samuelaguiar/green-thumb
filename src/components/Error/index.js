import "./index.scss";

import Button from "../Button";
import { Link } from "react-router-dom";
import React from "react";

function Error({ picUrl, errorMessage, resetFilters }) {
  return (
    <div className="error-container">
      {picUrl ? <img src={picUrl} alt=""></img> : <h1>:(</h1>}
      <h2>{errorMessage}</h2>
      <span>Do you want to try again?</span>
      <Link to="/">
        <Button
          label={"restart"}
          transition
          width={"170px"}
          clickHandler={resetFilters}
        ></Button>
      </Link>
    </div>
  );
}

export default Error;
