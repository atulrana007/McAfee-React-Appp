import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import "./index.css";

window.LoginWidget = class LoginWidget {
  init(opts) {
    const pageConfig = opts.pageConfig;
    if (!pageConfig) {
      throw new Error("pageConfig must be provided in opts");
    }

    ReactDOM.render(
      <App pageConfig={pageConfig} />,
      document.getElementById("root")
    );
  }
};
