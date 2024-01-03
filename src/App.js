import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mycard from "./components/Mycard";

export default class App extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div className="app">
        {this.state.show && <Mycard />}
        <p></p>
        <button
          onClick={() => {
            this.setState((prevshow) => ({ show: !prevshow.show }));
          }}
        >
          toggle
        </button>
      </div>
    );
  }
}
