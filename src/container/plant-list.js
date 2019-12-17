import { getFetchStatus, getPlants } from "../selector";

import PlantListPage from "../components/PlantListPage";
import { connect } from "react-redux";
import { fetchPlant } from "../actions/dataActions";
import { resetFilters } from "../actions/uiActions";

const mapStateToProps = state => ({
  plants: getPlants(state),
  fetchStatus: getFetchStatus(state).plants
});

const mapDispachToProps = dispatch => ({
  fetchPlant: id => dispatch(fetchPlant(id)),
  resetFilters: () => dispatch(resetFilters())
});

export default connect(mapStateToProps, mapDispachToProps)(PlantListPage);
