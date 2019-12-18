import { setFoward, startApp } from "../actions/uiActions";

import Home from "../components/Home";
import { connect } from "react-redux";

const mapDispachToProps = dispatch => ({
  startApp: () => dispatch(startApp()),
  setFoward: () => dispatch(setFoward(true))
});

export default connect(null, mapDispachToProps)(Home);
