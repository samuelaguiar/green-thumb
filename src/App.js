import "./styles/index.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";

import FilterPage from "./container/filter";
import Home from "./container/home";
import PlantListPage from "./container/plant-list";
import { Provider } from "react-redux";
import Purchase from "./container/purchase";
import React from "react";
import RefreshRoute from "./container/refresh-route";
import { play } from "./timelines";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Route
        render={({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                timeout={{ enter: 750 }}
              >
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <RefreshRoute
                    path="/Filter"
                    component={FilterPage}
                  ></RefreshRoute>
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
              </Transition>
            </TransitionGroup>
          );
        }}
      ></Route>
    </Router>
  </Provider>
);

export default App;
