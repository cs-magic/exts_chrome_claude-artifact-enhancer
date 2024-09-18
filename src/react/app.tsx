import { Trigger } from "./trigger";
import React from "react";
import ReactDOM from "react-dom";

import "../../../../assets/styles/main.css";

export const mountReactApp = (container: HTMLElement) => {
  ReactDOM.render(
    <React.StrictMode>
      <Trigger />
    </React.StrictMode>,
    container,
  );
};
