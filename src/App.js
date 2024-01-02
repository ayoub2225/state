import React, { Component } from "react";
// import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import Mycard from "./components/Mycard";

export default class App extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div>
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
