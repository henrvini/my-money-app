import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import AuthOrApp from "./main/authOrApp";
import reducers from "./main/reducers";

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const devTools = reduxDevToolsExtension && reduxDevToolsExtension();
const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <AuthOrApp />
  </Provider>,
  document.getElementById("app")
);
