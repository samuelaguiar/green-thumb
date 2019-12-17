import RefreshRoute from "../components/RefreshRoute";
import { connect } from "react-redux";
import { getStarted } from "../selector";

const mapStateToProps = state => ({
  isQuizStarted: getStarted(state)
});

export default connect(mapStateToProps)(RefreshRoute);
