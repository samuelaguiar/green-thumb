import "./index.scss";

import { Transition, TransitionGroup } from "react-transition-group";

import Button from "../Button";
import CardFilter from "../CardFilter";
import { Link } from "react-router-dom";
import React from "react";
import { playError } from "../../timelines";

const filterButton = (btn, i) => (
  <Button
    label={btn.label}
    outline
    arrow={i === 0 ? "left" : "right"}
    transition
    width={"146px"}
    clickHandler={btn.clickHandler}
    key={i}
  ></Button>
);

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
        <TransitionGroup component={null}>
          {error && (
            <Transition
              onEnter={node => playError(node, true)}
              onExit={node => playError(node, false)}
              timeout={{ enter: 300, exit: 100 }}
            >
              <div className="line error">*{error}</div>
            </Transition>
          )}
        </TransitionGroup>
        <div className="line btns">
          {btns.map((btn, i) =>
            btn.pathTo ? (
              <Link to={btn.pathTo} key={i}>
                {filterButton(btn, i)}
              </Link>
            ) : (
              filterButton(btn, i)
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
