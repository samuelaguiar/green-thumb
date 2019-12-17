import "./index.scss";

import React, { Component } from "react";

import CardContainer from "../CardContainer";

class CardFilter extends Component {
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
      Icon,
      IconActive,
      text,
      theme,
      setFilter,
      typeValue,
      value
    } = this.props;
    return (
      <CardContainer
        classes={`card-filter ${theme} ${typeValue === value ? "active" : ""}`}
        mouseEnter={this.setHover}
        mouseLeave={this.unsetHover}
        clickHandler={setFilter}
        value={value}
      >
        {this.state.hover || typeValue === value ? (
          <IconActive></IconActive>
        ) : (
          <Icon></Icon>
        )}
        <span>{text}</span>
      </CardContainer>
    );
  }
}

export default CardFilter;
