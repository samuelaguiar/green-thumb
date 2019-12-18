import "./index.scss";

import React, { Component } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { playError, playVertical } from "../../timelines";

import Button from "../Button";
import Envelop from "../../assets/illustrations/envelop.png";
import Error from "../Error";
import { ReactComponent as HighSunlight } from "../../assets/icons/grey/high-sun.svg";
import { ReactComponent as Invalid } from "../../assets/icons/red/invalid.svg";
import Loader from "../Loader";
import { ReactComponent as Logo } from "../../assets/logo/logo-greenthumb-vertical.svg";
import { ReactComponent as LowSunlight } from "../../assets/icons/grey/low-sun.svg";
import { ReactComponent as NoAnswer } from "../../assets/icons/grey/no-answer.svg";
import { ReactComponent as OneDrop } from "../../assets/icons/grey/one-drop.svg";
import { ReactComponent as Pet } from "../../assets/icons/grey/pet.svg";
import { ReactComponent as ThreeDrops } from "../../assets/icons/grey/three-drops.svg";
import { ReactComponent as Toxic } from "../../assets/icons/grey/toxic.svg";
import { ReactComponent as TwoDrops } from "../../assets/icons/grey/two-drops.svg";

const plantOptionsArray = (sun, water, toxicity) => {
  const array = [];

  switch (sun) {
    case "no":
      array.push({ icon: NoAnswer, label: <span>No sunlight</span> });
      break;
    case "low":
      array.push({ icon: LowSunlight, label: <span>Low sunlight</span> });
      break;
    case "high":
      array.push({ icon: HighSunlight, label: <span>High sunlight</span> });
      break;
    default:
      break;
  }

  switch (water) {
    case "daily":
      array.push({ icon: ThreeDrops, label: <span>Water daily</span> });
      break;
    case "regularly":
      array.push({ icon: TwoDrops, label: <span>Water regularly</span> });
      break;
    case "rarely":
      array.push({ icon: OneDrop, label: <span>Water rarely</span> });
      break;
    default:
      break;
  }

  switch (toxicity) {
    case true:
      array.push({
        icon: Toxic,
        label: (
          <span>
            <strong>Beware!</strong> Toxic for pets
          </span>
        )
      });
      break;
    case false:
      array.push({ icon: Pet, label: <span>Non-toxic for pets</span> });
      break;
    default:
      break;
  }

  return array;
};

class PurchasePage extends Component {
  state = {
    id: "",
    hover: false,
    name: "",
    validName: false,
    email: "",
    validEmail: false
  };

  setHover = e => {
    this.setState({ hover: true, id: e.target.name });
  };

  unsetHover = () => {
    this.setState({ hover: false });
  };

  setName = e => {
    this.setState({ name: e.target.value });
  };

  setEmail = e => {
    this.setState({ email: e.target.value });
  };

  validateName = e => {
    const name = e.target.value;
    const nameRegEx = /^[a-zA-Z]{2,} [a-zA-Z]{2,}/i;
    this.setState({ validName: nameRegEx.test(name), name });
  };

  validateEmail = e => {
    const email = e.target.value;
    const emailRegEx = /[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}\.[A-Z]{2,4}/i;
    this.setState({ validEmail: emailRegEx.test(email), email });
  };

  resetContact = () => {
    this.setState({
      id: "",
      hover: false,
      name: "",
      validName: false,
      email: "",
      validEmail: false
    });
    this.props.resetContact();
  };

  formSubmit = () => {
    const { name, email, validName, validEmail } = this.state;
    const { plant, postContact } = this.props;
    return validName && validEmail ? postContact(name, email, plant.id) : null;
  };

  render() {
    const { plant, fetchStatus, resetFilters } = this.props;

    return (
      <div className="container background-white">
        <div className="logo-bar">
          <Logo></Logo>
          <div className="green-line"></div>
        </div>
        <div className="container-inside align-container-center">
          <TransitionGroup component={null}>
            {fetchStatus.plant.status === 200 ? (
              <Transition onEnter={node => playVertical(node)} timeout={300}>
                <div className="purchase-container">
                  <div className="plant-info">
                    <h1>{plant.name}</h1>
                    <h3>${plant.price}</h3>
                    <img src={plant.url} alt={plant.name}></img>
                    <div className="plant-options">
                      {plantOptionsArray(
                        plant.sun,
                        plant.water,
                        plant.toxicity
                      ).map((option, index) => (
                        <div className="option" key={index}>
                          <option.icon></option.icon>
                          {option.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  {!fetchStatus.contact.sent ? (
                    <div className="contact-form">
                      <h2>Nice pick!</h2>
                      <span>
                        Tell us your name and e-mail and we will get in touch
                        regarding your order ;)
                      </span>
                      <form>
                        <div
                          className={`input-group ${
                            this.state.name.length > 0 && !this.state.validName
                              ? "invalid"
                              : ""
                          }`}
                        >
                          <label
                            htmlFor="name"
                            className={
                              this.state.hover && this.state.id === "name"
                                ? "active"
                                : ""
                            }
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="form-name"
                            placeholder="Crazy Plant Person"
                            onFocus={this.setHover}
                            onBlur={e => {
                              this.unsetHover();
                              this.validateName(e);
                            }}
                          />
                          <TransitionGroup component={null}>
                            {this.state.name.length > 0 &&
                              !this.state.validName && (
                                <Transition
                                  onEnter={node => playError(node, true)}
                                  onExit={node => playError(node, false)}
                                  timeout={{ enter: 200, exit: 100 }}
                                >
                                  <div className="error-container">
                                    <Invalid></Invalid>
                                    <span>
                                      Your name must have at least 4 letters.
                                    </span>
                                  </div>
                                </Transition>
                              )}
                          </TransitionGroup>
                        </div>
                        <div
                          className={`input-group ${
                            this.state.email.length > 0 &&
                            !this.state.validEmail
                              ? "invalid"
                              : ""
                          }`}
                        >
                          <label
                            htmlFor="email"
                            className={
                              this.state.hover && this.state.id === "email"
                                ? "active"
                                : ""
                            }
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="form-email"
                            placeholder="plantperson@email.com"
                            onFocus={this.setHover}
                            onBlur={e => {
                              this.unsetHover();
                              this.validateEmail(e);
                            }}
                          />
                          <TransitionGroup component={null}>
                            {this.state.email.length > 0 &&
                              !this.state.validEmail && (
                                <Transition
                                  onEnter={node => playError(node, true)}
                                  onExit={node => playError(node, false)}
                                  timeout={{ enter: 200, exit: 100 }}
                                >
                                  <div className="error-container">
                                    <Invalid></Invalid>
                                    <span>Please provide a valid e-mail.</span>
                                  </div>
                                </Transition>
                              )}
                          </TransitionGroup>
                        </div>
                      </form>
                      <Button
                        label="send"
                        outline
                        transition
                        width={"138px"}
                        clickHandler={this.formSubmit}
                      ></Button>
                    </div>
                  ) : fetchStatus.contact.status === 200 ? (
                    <div className="contact-form center">
                      <h2>Thank you!</h2>
                      <span>
                        You will hear from us soon. <br></br>
                        Please check your e-mail!
                      </span>
                      <img src={Envelop} alt="form-sent"></img>
                    </div>
                  ) : fetchStatus.contact.status === 422 ? (
                    <div className="contact-form center">
                      <h2>Error</h2>
                      <span>
                        Some error ocurred. <br></br>
                        Do you want to try again?
                      </span>
                      <Button
                        label="try again"
                        outline
                        transition
                        width={"138px"}
                        clickHandler={this.resetContact}
                      ></Button>
                    </div>
                  ) : (
                    <div className="contact-form">
                      <Loader></Loader>
                    </div>
                  )}
                </div>
              </Transition>
            ) : fetchStatus.contact.status === 422 ? (
              <Transition onEnter={node => playVertical(node)} timeout={300}>
                <Error
                  errorMessage={"Unfortunately, an error ocurred."}
                  resetFilters={resetFilters}
                ></Error>
              </Transition>
            ) : (
              <Loader></Loader>
            )}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default PurchasePage;
