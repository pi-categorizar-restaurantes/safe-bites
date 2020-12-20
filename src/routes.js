import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConfirmPasswordRecover from "./pages/ConfirmSignUp/ConfirmPasswordRecover";
import ConfirmSignUp from "./pages/ConfirmSignUp/ConfirmSignUp";
import HomePage from "./pages/HomePage";
import IntermediarySignUp from "./pages/IntermediarySignUp";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Page404 from "./pages/Page404";
import RecoverPassword from "./pages/RecoverPassword";
import ChangePassword from "./pages/ChangePassword";
import SignUp from "./pages/SignUp";
import AuthenticatedAction from "./pages/AuthenticatedAction";
import RoutingButtons from "./pages/RoutingButtons";

const Routes = () => {
  const firstAccess = localStorage.getItem("first-access");
  const auth = localStorage.getItem("auth");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/routes" exact={true} component={RoutingButtons} />
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
        <Route path="/signup/confirm" exact={true} component={ConfirmSignUp} />
        <Route
          path="/recover-password/confirm"
          exact={true}
          component={ConfirmPasswordRecover}
        />
        <Route path="/login" exact={true} component={Login} />
        <Route
          path="/recover-password"
          exact={true}
          component={RecoverPassword}
        />
        <Route
          path="/change-password"
          exact={true}
          component={ChangePassword}
        />
        <Route path="/unauth" exact={true} component={AuthenticatedAction} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
