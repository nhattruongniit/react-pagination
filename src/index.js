import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers
import appReducer from "./reducers";

// css
import "./index.css";

//component
import App from "./App";

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
