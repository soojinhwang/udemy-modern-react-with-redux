// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom/client';

// 2) Get the reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// 4) Create a Component
function App() {
  // let message = "Bye there!"
  // if (Math.random() > 0.5) {
  //   message = "Hello there!";
  // }

  return <h1>{new Date().toLocaleTimeString()}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
