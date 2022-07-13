// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom/client';

// 2) Get the reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// 4) Create a Component
function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{backgroundColor: 'gray'}}
      />
    </div>
  );

  // let message = "Bye there!"
  // if (Math.random() > 0.5) {
  //   message = "Hello there!";
  // }
  // return <h1>{new Date().toLocaleTimeString()}</h1>;

  // const name = "Samantha";
  // const age = 23;
  // return (
  //   <h1>
  //     Hi, my name is {name} and my age is {age}
  //   </h1>
  // );

  // const inputType = "number";
  // const minValue = 5;
  // return <input type={inputType} min={minValue} />;
  // return <input style={{ border: "3px solid red" }} type="number" min={5} />;



}

// 5) Show the component on the screen
root.render(<App />);
