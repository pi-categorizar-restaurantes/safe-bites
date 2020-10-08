import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IntermediarySignUp from "./pages/IntermediarySignUp";
import Onboarding from "./pages/Onboarding";
import Page404 from "./pages/Page404";
import SignUp from "./pages/SignUp";

const Routes = () => {
  const firstAccess = localStorage.getItem("first-access");

  return (
    <BrowserRouter>
      <Switch>
        {firstAccess !== "false" && (
          <Route path="/" exact={true} component={Onboarding} />
        )}
        {firstAccess === "false" && (
          <Route path="/" exact={true} component={HomePage} />
        )}
        <Route path="/home" exact={true} component={HomePage} />
        <Route path="/onboarding" exact={true} component={Onboarding} />
        <Route path="/signup" exact={true} component={IntermediarySignUp} />
        <Route
          path="/signup/place"
          exact={true}
          render={() => <SignUp isPlace={true} />}
        />
        <Route
          path="/signup/user"
          exact={true}
          render={() => <SignUp isPlace={false} />}
        />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
