import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
