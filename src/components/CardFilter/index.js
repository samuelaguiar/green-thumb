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
    const { Icon, IconActive, text, theme } = this.props;
    return (
      <CardContainer
        classes={`card-filter ${theme}`}
        mouseEnter={this.setHover}
        mouseLeave={this.unsetHover}
      >
        {this.state.hover ? <IconActive></IconActive> : <Icon></Icon>}
        <span>{text}</span>
      </CardContainer>
    );
  }
}

export default CardFilter;
