import "./styles/index.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Filter from "./container/filter";
import Home from "./components/Home";
import { Provider } from "react-redux";
import React from "react";
import store from "./store";

// import CardFilter from "./components/CardFilter";
// import CardPlant from "./components/CardPlant";
// import { ReactComponent as NoAnswer } from "./assets/icons/coral/no-answer.svg";
// import { ReactComponent as NoAnswerActive } from "./assets/icons/white/no-answer.svg";
// import { ReactComponent as Toxic } from "./assets/icons/grey/toxic.svg";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Filter" component={Filter}></Route>
      </Switch>
    </Router>
  </Provider>
);
// <div className="App">
//   <CardFilter
//     text={"No answer"}
//     Icon={NoAnswer}
//     IconActive={NoAnswerActive}
//     theme={"green"}
//   ></CardFilter>
//   <CardPlant
//     src={
//       "https://front-static-recruitment.s3.amazonaws.com/euphorbia-eritrea.jpg"
//     }
//     name={"Euphorbia eritrea"}
//     price={"25"}
//     options={[Toxic, Toxic, Toxic]}
//   ></CardPlant>
// </div>;

export default App;
