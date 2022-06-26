import React, { useState } from "react";

function App() {
  // rely on react dom to render these javaScript Elements
  // renders it once unless called
  // var count = 0;
  //use a value and a function
  const [count, setCount] = useState(0);

  // console.log(state);

  // destructure a complex structure such as an array or object.
  // const rgb = [26, 188, 156]
  // can be written as (destructured)with  name mapped to value
  const [red, green, blue] = [26, 188, 156];
  // hooks must be used inside a functional component
  function increase() {
    // count++;
    // to change the state to 12 use setCount function
    setCount(count + 1);
  }

  function decrease() {
    // count++;
    // to change the state to 12 use setCount function
    setCount(count - 1);
  }
  return (
    <div className="container">
      {/* will rerender when state changes */}
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );

  // return (
  //   <div className="container">
  //     {/* will rerender when state changes */}
  //     <h1>{count}</h1>
  //     <button onClick={increase}>+</button>
  //     <button onClick={decrease}>-</button>
  //   </div>
  // );
}

export default App;
