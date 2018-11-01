import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tile from "./Tile";

class App extends Component {
  state = {
    hogs
  };
  //
  sortHandler = event => {
    let value = event.target.value;
    if (value === "name") {
      let newHogs = hogs.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
      this.setState({
        hogs: newHogs
      });
    } else if (value === "weight") {
      let newHogs = hogs.sort((a, b) => a.weight - b.weight);
      this.setState({
        hogs: newHogs
      });
    } else if (value === "greased") {
      let newHogs = [];
      hogs.map(hog => {
        if (hog.greased) {
          newHogs.push(hog);
        }
      });
      this.setState({
        hogs: newHogs
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        Sorb By:
        <select onChange={this.sortHandler}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="greased">greased</option>
        </select>
        <div className="ui grid container">
          {this.state.hogs.map(hog => {
            return <Tile key={hog.name} hog={hog} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
