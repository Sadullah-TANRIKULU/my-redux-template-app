import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div className="bg-slate-300 h-screen" >
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
