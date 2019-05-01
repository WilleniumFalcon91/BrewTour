import React, { Component } from "react";
import axios from "axios";
// import logo from "./logo.svg";
import beerbus from "./ATLANTA-BEER-BUS-Logo.png";
import "./App.css";

class App extends Component {
  state = {
    content: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/greeting")
      .then(response => {
        // create an array of contacts only with relevant data
        // const newContent = response.data.map(item => {
        //   return {
        //     id: item.id,
        //     content: item.content
        //   };
        // });

        console.log("response: ", response);

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          content: response.data.content
        });

        //store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={beerbus} className="App-logo" alt="logo" />
          <h1>BrewTour</h1>
          <h1>{this.state.content}</h1>
        </header>
      </div>
    );
  }
}

export default App;
