import { getFetchStatus, getPlant } from "../selector";
import { resetContact, resetFilters } from "../actions/uiActions";

import PurchasePage from "../components/PurchasePage";
import { connect } from "react-redux";
import { postContact } from "../actions/dataActions";

const mapStateToProps = state => ({
  plant: getPlant(state),
  fetchStatus: getFetchStatus(state)
});

const mapDispachToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters()),
  resetContact: () => dispatch(resetContact()),
  postContact: (name, email, id) => dispatch(postContact(name, email, id))
});

export default connect(mapStateToProps, mapDispachToProps)(PurchasePage);
