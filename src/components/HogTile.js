import React, { Component } from 'react';
import '../App.css';
import FrontTile from './FrontTile'
import BackTile from './BackTile'

class HogTile extends Component {
  constructor() {
    super()
    this.state = {
      side: "Front"
    }
  }

  handleClick = () => {
    this.state.side === "Front" ? this.setState({ side: "Back" }) : this.setState({ side: "Front" })
  }

  render() {
    return (
      <div className="pigTile" onClick={this.handleClick} >
        { this.state.side === "Front" ? (< FrontTile hog={this.props.hog} />) : (< BackTile hog={this.props.hog} />) }
      </div>
    )
  }
}

export default HogTile;