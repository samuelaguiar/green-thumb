import "./index.scss";

import Button from "../Button";
import CardFilter from "../CardFilter";
import { Link } from "react-router-dom";
import React from "react";

const FilterContainer = ({
  picture,
  title,
  subtitle,
  options,
  theme,
  btns
}) => {
  return (
    <div className="filter-container">
      <img src={picture} alt=""></img>
      <div
        className="filter-info"
        style={{ maxWidth: subtitle ? "" : "450px" }}
      >
        {title}
        {subtitle ? subtitle : null}
      </div>
      <div className="filter-options">
        <div className="line">
          {options.map(option => (
            <CardFilter
              text={option.text}
              Icon={option.icon}
              IconActive={option.iconActive}
              theme={theme}
              key={option.text}
            ></CardFilter>
          ))}
        </div>
        <div className="line btns">
          {btns.map((btn, i) => (
            <Link to={btn.pathTo} key={i}>
              <Button
                label={btn.label}
                outline
                arrow={i === 0 ? "left" : "right"}
                transition
                width={"146px"}
              ></Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
