import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //example fetch GET on mount of app overall to allusers endpoint
  //and logging JSON result of * from users.
  componentDidMount() {
    fetch("/allusers").then(res => console.log(res.json()));
  }

  //boilerplate create-react-app view
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
