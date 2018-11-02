import React, { Component } from "react";
import "../App.css";

export default class Tile extends Component {
  state = {
    selected: false
  };

  handleClick = () => {
    this.handleSelect(this.props.hog);
  };

  handleSelect() {
    this.state.selected
      ? this.setState({
          selected: false
        })
      : this.setState({
          selected: true
        });
  }

  render() {
    let info;

    this.state.selected
      ? (info = (
          <div>
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased + ""}</p>
            <p>
              Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
              Refrigerator with Thru-the-Door Ice and Water:
              {
                this.props.hog[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </p>
            <p>
              Highest Medal Achieved: {this.props.hog["highest medal achieved"]}
            </p>
          </div>
        ))
      : (info = "");

    return (
      <div className="pigTile ui four wide column">
        <img
          src={this.props.hog.image}
          name={this.props.hog.name}
          alt="pigs"
          onClick={this.handleClick}
        />
        <h3>{this.props.hog.name}</h3>
        {info}
      </div>
    );
  }
}
