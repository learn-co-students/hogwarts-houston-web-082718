import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Tile from './Tile'
import hogs from '../porkers_data';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hogs: hogs
    }
  }

  sortHogs = (event) => {
    let value = event.target.value
    if (value === 'name') {
      let newHogs = hogs.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      this.setState({
        hogs: newHogs
      })
    } else if (value === 'weight') {
      let newHogs = hogs.sort((a, b) => a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]);;
      this.setState({
        hogs: newHogs
      })
    } else if (value === "greased") {
      let newHogs = []
      hogs.map(hog => {
        if (hog.greased) {
          newHogs.push(hog)
        }
        return newHogs
      })
      console.log(newHogs)
      this.setState({
        hogs: newHogs
      })
    }
  }

  render() {
    return (
      <div className="App" onClick={this.clickHandler}>
        < Nav />
        Sort By:
        <select onChange={this.sortHogs}>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
          <option value='greased'>Greased</option>
        </select>
        <div className="ui grid container">
          {this.state.hogs.map(hog => {
            return < Tile key={hog.name} hog={hog} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
