import "./index.scss";

import React from "react";

const CardContainer = ({
  children,
  classes,
  mouseEnter,
  mouseLeave,
  clickHandler,
  value
}) => {
  return (
    <div
      className={`card ${classes}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => (clickHandler ? clickHandler(value) : null)}
    >
      {children}
    </div>
  );
};

export default CardContainer;
