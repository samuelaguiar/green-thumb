import { getFetchStatus, getPlant } from "../selector";

import PurchasePage from "../components/PurchasePage";
import { connect } from "react-redux";
import { postContact } from "../actions/dataActions";
import { resetFilters } from "../actions/uiActions";

const mapStateToProps = state => ({
  plant: getPlant(state),
  fetchStatus: getFetchStatus(state)
});

const mapDispachToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters()),
  postContact: (name, email, id) => dispatch(postContact(name, email, id))
});

export default connect(mapStateToProps, mapDispachToProps)(PurchasePage);
