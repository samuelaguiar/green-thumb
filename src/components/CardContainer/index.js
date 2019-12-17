import "./index.scss";

import React from "react";

const CardContainer = ({ children, classes, mouseEnter, mouseLeave }) => {
  return (
    <div
      className={`card ${classes}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {children}
    </div>
  );
};

export default CardContainer;
