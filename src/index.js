import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import { store } from "./store/store";

import { Provider } from "react-redux";

const destination = document.querySelector(".root");

ReactDOM.render(
  <Provider store={ store }>
    <Home />
  </Provider>,
  destination
);