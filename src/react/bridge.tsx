import ReactDOM from "react-dom/client";
import React from "react";

export const mountReactApp = (
  container: HTMLElement,
  ReactElement: () => JSX.Element,
) => {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <ReactElement />
    </React.StrictMode>,
  );
};
