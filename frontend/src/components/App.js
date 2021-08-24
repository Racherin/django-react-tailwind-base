import React, { Component } from "react";
import { render } from "react-dom";
import AppBar from "./AppBar";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppBar />;
  }
}

const appDiv = document.getElementById("root");
render(<App />, appDiv);
