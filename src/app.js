import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar, Footer } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import Main from "./components/main";
import Authorize from "./components/Authorize";
import DashBoard from "./components/dashboard";
import Login from "./components/login/index";
import Signup from "./components/signup/index";
import { AccountProvider } from "./providers/AccountContext";

import "./app.css";

const App = ({ pageConfig }) => {
  console.log("Bundle is working fine");
  return (
    <Router>
      <AccountProvider config={pageConfig}>
        <div id="app" className="d-flex flex-column h-100">
          <div className="container flex-grow-1">
            <div className="mt-5">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signUp" exact component={Signup} />
                <Route exact path="/authorize">
                  <Authorize config={pageConfig} />
                </Route>
                <Route exact path="/dashboard" component={DashBoard} />
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute path="/external-api" component={ExternalApi} />
              </Switch>
            </div>
          </div>
        </div>
      </AccountProvider>
    </Router>
  );
};

export default App;
