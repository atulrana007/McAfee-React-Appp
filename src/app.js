import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import Main from "./components/main";
import Authorize from "./components/Authorize";
import DashBoard from "./components/dashboard";
import Login from "./components/login/index";
import { AccountProvider } from "./providers/AccountContext";

import "./app.css";

const App = () => {
  console.log("Bundle is working fine");
  return (
    <AccountProvider>
      <div id="app" className="d-flex flex-column h-100">
        <div className="container flex-grow-1">
          <div className="mt-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route exact path="/authorize" component={Authorize} />
              <Route exact path="/dashboard" component={DashBoard} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/external-api" component={ExternalApi} />
            </Switch>
          </div>
        </div>
      </div>
    </AccountProvider>
  );
};

export default App;
