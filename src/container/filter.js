import * as actionUI from "../actions/uiActions";

import { getPets, getSunlight, getWater } from "../selector";

import Filter from "../components/Filter";
import { connect } from "react-redux";
import { getPlants } from "../actions/dataActions";

const mapStateToProps = state => ({
  sunlight: getSunlight(state),
  water: getWater(state),
  pets: getPets(state)
});

const mapDispachToProps = dispatch => ({
  setSunlight: value => dispatch(actionUI.setSunlight(value)),
  setWater: value => dispatch(actionUI.setWater(value)),
  setPets: value => dispatch(actionUI.setPets(value)),
  getPlants: (sunlight, water, pets) =>
    dispatch(getPlants(sunlight, water, pets))
});

export default connect(mapStateToProps, mapDispachToProps)(Filter);
