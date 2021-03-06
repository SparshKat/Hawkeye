/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import TestPage from "views/examples/TestPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SeatPage from "views/examples/SeatPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/test-page"
        render={props => <TestPage {...props} />}
      />
      <Route
        path="/seat-page"
        render={props => <SeatPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Redirect to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
