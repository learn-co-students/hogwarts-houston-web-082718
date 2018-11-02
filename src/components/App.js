import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from './PigPen.js'
class App extends Component {
  state = {
    hogs: hogs
  }

  handleSort = event => {
    let filteredHogs = [...hogs];
    let filter = event.target.value;
    if (filter === "name") {
      filteredHogs.sort((a,b) => {return a.name.localeCompare(b.name);});
    } else if (filter === "weight") {
      filteredHogs.sort((a,b) => {return a.weight - b.weight});
    } else if (filter === "greased") {
      filteredHogs = filteredHogs.filter(hog => hog.greased);
    } else if (filter === "none") {
      filteredHogs = [...hogs];
    }
    this.setState({
      hogs: filteredHogs
    })
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui twelve wide column App">
          <Nav />
          <select onChange={this.handleSort}>
            <option value="none">Default</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
            <option value="greased">Greased?</option>
          </select>
        </div>
        
        <PigPen hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
