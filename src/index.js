import React from "react";
import ReactDOM from "react-dom";
import Home from './components/home.jsx';

const App = () => {
  return (<div>
    <Home />
  </div>);
};

ReactDOM.render(<App />, document.querySelector("#root"));
