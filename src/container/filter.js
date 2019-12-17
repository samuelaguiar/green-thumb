import * as actionUI from "../actions/uiActions";

import { getError, getPets, getSunlight, getWater } from "../selector";

import Filter from "../components/Filter";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  sunlight: getSunlight(state),
  water: getWater(state),
  pets: getPets(state),
  error: getError(state)
});

const handleSetFilter = (dispatch, setFilter, value) => {
  dispatch(setFilter(value));
  dispatch(actionUI.updateError(false, ""));
};

const mapDispachToProps = dispatch => ({
  setSunlight: value => handleSetFilter(dispatch, actionUI.setSunlight, value),
  setWater: value => handleSetFilter(dispatch, actionUI.setWater, value),
  setPets: value => handleSetFilter(dispatch, actionUI.setPets, value),
  updateError: (status, text) => dispatch(actionUI.updateError(status, text))
});

export default connect(mapStateToProps, mapDispachToProps)(Filter);
