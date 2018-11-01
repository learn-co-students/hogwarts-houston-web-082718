import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hog from "./Hog.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      greased: false,
      sortBy: "None"
    };
  }

  getHogs = () => {
    let newHogs = hogs;
    if (this.state.greased === true) {
      newHogs = this.filterHogs(newHogs);
    }

    newHogs = this.sortHogs(newHogs);

    return newHogs.map(hog => <Hog key={hog.name} hog={hog} />);
  };

  filterHogs = hogs => {
    let returnedHogs = hogs;
    if (this.state.greased) {
      returnedHogs = hogs.filter(hog => {
        return hog.greased === true;
      });
    }

    return returnedHogs;
  };

  sortHogs = hogs => {
    let returnedHogs = hogs;
    switch (this.state.sortBy) {
      case "None":
        returnedHogs = hogs;
        break;
      case "Name":
        returnedHogs = hogs.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Weight":
        returnedHogs = hogs.sort(
          (a, b) =>
            a[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ] -
            b[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
        );
        break;
      default:
        console.log("Boooo");
        break;
    }

    return returnedHogs;
  };

  setFilterHogs = () => {
    this.state.greased
      ? this.setState({ greased: false })
      : this.setState({ greased: true });
  };

  setSortState = event => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Nav />

        <form>
          Sort by:
          <select onChange={this.setSortState}>
            <option value="None">None</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
          </select>
          Greased?
          <input type="checkbox" onClick={this.setFilterHogs} />
        </form>
        <br />
        <br />
        <div className="ui grid container">{this.getHogs()}</div>
      </div>
    );
  }
}

export default App;
