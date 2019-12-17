import "./index.scss";

import Button from "../Button";
import CardFilter from "../CardFilter";
import { Link } from "react-router-dom";
import React from "react";

const errorText = "Select at least one option";

const FilterContainer = ({
  picture,
  title,
  subtitle,
  options,
  theme,
  btns,
  setFilter,
  typeValue,
  error
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
              key={option.value}
              value={option.value}
              setFilter={setFilter}
              typeValue={typeValue}
            ></CardFilter>
          ))}
        </div>
        {error ? <div className="line error">*{error}</div> : null}
        <div className="line btns">
          {btns.map((btn, i) => (
            <Link to={btn.pathTo} key={i}>
              <Button
                label={btn.label}
                outline
                arrow={i === 0 ? "left" : "right"}
                transition
                width={"146px"}
                clickHandler={btn.clickHandler}
                errorStatus={btn.errorStatus}
                errorText={btn.errorStatus ? errorText : ""}
              ></Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
