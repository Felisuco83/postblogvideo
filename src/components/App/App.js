import logo from "./../../logo.svg";
import "./App.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "./../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Router from "./../Router";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Router></Router>
    </div>
  );
}

export default App;
