import React from "react";
import ReactDOM from "react-dom";

var count = 0;
function increase() {
  count++;
  console.log(count);
  console.log("I got clicked");
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

// rely on react dom to render these javaScript Elements
// renders it once unless called
ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);
