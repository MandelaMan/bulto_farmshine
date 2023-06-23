import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
// const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

const Accounting = lazy(() => import("./pages/Accounting"));
const Agents = lazy(() => import("./pages/Agents"));
const Contracts = lazy(() => import("./pages/Contracts"));
const Farmers = lazy(() => import("./pages/Farmers"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reports = lazy(() => import("./pages/Reports"));
const Stock = lazy(() => import("./pages/Stock"));
const LandDistribution = lazy(() => import("./pages/LandDistribution"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const FarmerSummary = lazy(() => import("./pages/FarmerSummary"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/farmer-summary" component={FarmerSummary} />

          <Route exact path="/accounting" component={Accounting} />
          <Route exact path="/agents" component={Agents} />
          <Route exact path="/contracts" component={Contracts} />
          <Route exact path="/farmers" component={Farmers} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/stock" component={Stock} />
          <Route exact path="/land-distribution" component={LandDistribution} />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;