import React from "react";
import ReactDOM from "react-dom";
import promise from "redux-promise";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import App from "./main/app";
import reducers from "./main/reducers";

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const devTools = reduxDevToolsExtension && reduxDevToolsExtension();
const store = applyMiddleware(promise)(createStore)(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
