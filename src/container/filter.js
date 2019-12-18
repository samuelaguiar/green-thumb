import * as actionUI from "../actions/uiActions";

import { getError, getPets, getSunlight, getWater } from "../selector";

import FilterPage from "../components/FilterPage";
import { connect } from "react-redux";
import { fetchPlants } from "../actions/dataActions";
import store from "../store";

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

const fetchPlantsAux = dispatch => {
  const state = store.getState();
  dispatch(fetchPlants(getSunlight(state), getWater(state), getPets(state)));
};

const mapDispachToProps = dispatch => ({
  setFoward: isFoward => dispatch(actionUI.setFoward(isFoward)),
  setSunlight: value => handleSetFilter(dispatch, actionUI.setSunlight, value),
  setWater: value => handleSetFilter(dispatch, actionUI.setWater, value),
  setPets: value => handleSetFilter(dispatch, actionUI.setPets, value),
  updateError: (status, text) => dispatch(actionUI.updateError(status, text)),
  fetchPlants: () => fetchPlantsAux(dispatch)
});

export default connect(mapStateToProps, mapDispachToProps)(FilterPage);
