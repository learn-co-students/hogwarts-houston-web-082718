import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigsList from "./PigsList";

class App extends Component {
  state = {
    pigs: [],
    greased: false
  };

  componentDidMount() {
    const pigs = this.grabAllPigs();
    this.setState({ pigs });
  }

  grabAllPigs = () => {
    return hogs;
  };

  sortPigsByName = () => {
    this.state.pigs.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); 
      var nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      pigs: this.state.pigs
    });
  };

  sortPigsByWeight = () => {
    console.log("sorted");
    this.state.pigs.sort(function(a, b) {
      return (
        a[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ] -
        b[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ]
      );
    });
    this.setState({
      pigs: this.state.pigs
    });
  };

  showGreasedPigs = () => {
    if (!this.state.greased) {
      let greasedPigs = this.state.pigs.filter(pig => {
        return pig.greased;
      });
      this.setState({
        pigs: greasedPigs,
        greased: true
      });
      console.log(this.state)
    } else {
      this.setState({
        pigs: hogs,
        greased: false
      })
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.sortPigsByName}>Sort by Name</button>
        <button onClick={this.sortPigsByWeight}>Sort by Weight</button>
        <button onClick={this.showGreasedPigs}>Show Greased</button>
        <PigsList pigs={this.state.pigs} />
      </div>
    );
  }
}

export default App;
