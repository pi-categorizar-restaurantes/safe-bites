import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Onboarding from "./pages/Onboarding";
import Page404 from "./pages/Page404";

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
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
