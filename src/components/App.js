import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigsList from "./PigsList";

class App extends Component {
  state = {
    pigs: []
  };

  componentDidMount() {
    const pigs = this.grabAllPigs();
    this.setState({ pigs });
  }

  grabAllPigs = () => {
    return hogs;
  };

  // sortPigs = event => {
  //   if (event.target.name === "name") {
  //     const weightSort = this.state.pigs.sort(function(a, b) {
  //       return a.value - b.value;
  //     });
  //     this.setState({
  //       pigs: weightSort
  //     });
  //   }
  //   const nameSort = this.state.pigs.sort(function(a, b) {
  //     var nameA = a.name.toUpperCase();
  //     var nameB = b.name.toUpperCase();
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   this.setState({
  //     pigs: nameSort
  //   });
  // };

  sortPigsByName = () => {
    this.state.pigs.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    let greasedPigs = this.state.pigs.filter(pig => {
      return pig.greased;
    });
    this.setState({
      pigs: greasedPigs
    });
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
