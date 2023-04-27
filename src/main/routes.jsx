import React from "react";
import { Switch, Route, Redirect } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default () => (
  <div className="content-wrapper">
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/billingCycles" component={BillingCycle} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
