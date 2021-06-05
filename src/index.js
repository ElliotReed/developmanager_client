import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "react-datepicker/dist/react-datepicker.css";
import "./utils/fontawesome";
import "./styles/main.scss";

import {
  IsAuthenticatedContextProvider,
  IsAuthenticatedContextConsumer,
} from "services/authService/IsAuthenticatedContext";

import AppProviders from "./context";

const root = document.getElementById("develop-manager");

ReactDOM.render(
  <React.StrictMode>
    {/* <AppProviders> */}
    <IsAuthenticatedContextProvider>
      <IsAuthenticatedContextConsumer>
        {(context) => (
          <App
            isAuthenticated={context.isAuthenticated}
            setIsAuthenticated={context.setIsAuthenticated}
          />
        )}
      </IsAuthenticatedContextConsumer>
    </IsAuthenticatedContextProvider>
    {/* </AppProviders> */}
  </React.StrictMode>,
  root
);
// module.hot && module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
