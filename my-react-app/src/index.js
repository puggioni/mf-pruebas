import React from 'react';
import singleSpaReact from "single-spa-react";
import ReactDOM from 'react-dom/client';
import App from './App';


const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
  errorBoundary(err, info, props) {
    // Handle errors
  },
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

function domElementGetter() {
  const element = document.getElementById('root')
  const root = ReactDOM.createRoot(element)

  return root.render(
    <App />
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
  );
}