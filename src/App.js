import "./styles/index.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import FilterPage from "./container/filter";
import Home from "./container/home";
import PlantListPage from "./container/plant-list";
import { Provider } from "react-redux";
import Purchase from "./container/purchase";
import React from "react";
import RefreshRoute from "./container/refresh-route";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <RefreshRoute path="/Filter" component={FilterPage}></RefreshRoute>
        <RefreshRoute
          exact
          path="/Picks"
          component={PlantListPage}
        ></RefreshRoute>
        <RefreshRoute
          exact
          path="/Purchase"
          component={Purchase}
        ></RefreshRoute>
      </Switch>
    </Router>
  </Provider>
);

export default App;
