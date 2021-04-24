import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss";
import "./utils/fontawesome";
import * as serviceWorker from "./serviceWorker";

import {
  IsAuthenticatedContextProvider,
  IsAuthenticatedContextConsumer,
} from "services/authService/IsAuthenticatedContext";

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("develop-manager")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
