import { Redirect, Route } from "react-router-dom";

import React from "react";

const RefreshRoute = ({ component: Component, isQuizStarted, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isQuizStarted ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default RefreshRoute;
