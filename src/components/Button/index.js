import "./index.scss";

import React, { Component } from "react";

import { ReactComponent as Arrow } from "../../assets/icons/white/arrow.svg";
import { ReactComponent as ArrowOutline } from "../../assets/icons/green/arrow.svg";

class Button extends Component {
  state = {
    hover: false
  };

  setHover = () => {
    this.setState({ hover: true });
  };

  unsetHover = () => {
    this.setState({ hover: false });
  };

  render() {
    const {
      label,
      outline,
      arrow,
      transition,
      width,
      weight,
      clickHandler
    } = this.props;
    return (
      <button
        className={`btn${outline ? " outline" : " solid"}${
          transition ? " transition" : ""
        }`}
        style={{ width: width ? width : "", fontWeight: weight ? weight : "" }}
        onMouseEnter={this.setHover}
        onMouseLeave={this.unsetHover}
        onClick={clickHandler}
      >
        {arrow ? (
          !outline || this.state.hover ? (
            <Arrow
              className={`arrow ${arrow === "left" ? "left" : ""}`}
            ></Arrow>
          ) : (
            <ArrowOutline
              className={`arrow ${arrow === "left" ? "left" : ""}`}
            ></ArrowOutline>
          )
        ) : null}
        {label}
      </button>
    );
  }
}

export default Button;
