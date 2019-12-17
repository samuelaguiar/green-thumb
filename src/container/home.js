import Home from "../components/Home";
import { connect } from "react-redux";
import { startApp } from "../actions/uiActions";

const mapDispachToProps = dispatch => ({
  startApp: () => dispatch(startApp())
});

export default connect(null, mapDispachToProps)(Home);
