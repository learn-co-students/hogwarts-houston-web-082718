import React, { Component } from "react";

class Tile extends Component {
  clickHandler = () => {
    let div = document.getElementById(this.props.hog.name);
    if (div.hidden) {
      div.hidden = false;
    } else {
      div.hidden = true;
    }
  };

  hidediv = () => {
    let div = document.getElementById(this.props.hog.weight);
    if (div.hidden) {
      div.hidden = false;
    } else {
      div.hidden = true;
    }
  };

  render() {
    return (
      <div
        id={this.props.hog.weight}
        className="pigTile"
        onClick={this.clickHandler}
      >
        <h3>Name: {this.props.hog.name}</h3>
        <img src={this.props.hog.img} />
        <div id={this.props.hog.name} hidden>
          <p>specialty: {this.props.hog.specialty}</p>
          <p>greased: {this.props.hog.greased}</p>
          <p>best medel: {this.props.hog["highest medal achieved"]}</p>
          <p>weight: {this.props.hog.weight} tons</p>
        </div>
        <br />
        <button onClick={this.hidediv}>hide</button>
      </div>
    );
  }
}

export default Tile;
