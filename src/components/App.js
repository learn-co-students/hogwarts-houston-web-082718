import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tiles from "./Tile";

class App extends Component {
  state = {
    hogs
  };

  handleSort = event => {
    let newHogs = hogs;
    let filter = event.target.value;
    if (filter === "name") {
      //name sort
      newHogs.sort((a, b) => {
        let nameA = a.name;
        let nameB = b.name;

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (filter === "weight") {
      newHogs.sort((a, b) => {
        return (
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ] -
          b[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
        );
      });
    } else if (filter === "greased") {
      newHogs = newHogs.map(hog => {
        if (hog.greased) {
          return hog;
        }
      });
    }
    this.setState({
      hogs: newHogs
    });
  };

  render() {
    return (
      <div className="ui grid container">
        <div className="ui twelve wide column App">
          <Nav />
          <select onChange={this.handleSort}>
            <option value="none" />
            <option value="name"> Name </option>
            <option value="weight"> Weight </option>
            <option value="greased"> Greased </option>
          </select>
        </div>
        <div className="ui grid container">
          {hogs.map(hog => {
            if (hog) return <Tiles key={hog.name} hog={hog} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
