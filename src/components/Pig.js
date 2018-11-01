import React, { Component } from "react";

class Pig extends Component {
  state = {
    showDetails: false
  };

  pigClickHandler = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  render() {
    const { name, specialty, greased } = this.props.pig;
    const weight = this.props.pig[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
    const medal = this.props.pig["highest medal achieved"];
    let pigName = (
      <div className="ui eight wide column" onClick={this.pigClickHandler}>
        <h2>{name}</h2>
        <img
          src={require(`../hog-imgs/${name
            .toLowerCase()
            .split(" ")
            .join("_")}.jpg`)}
        />
      </div>
    );
    let pigInfo = (
      <div className="ui eight wide column" onClick={this.pigClickHandler}>
        <h2>{name}</h2>
        <h4>{specialty}</h4>
        <h4>Weight: {weight}</h4>
        <h4>Awards: {medal}</h4>
        <h4>{greased ? "Greasy Pig" : "Dry Pig"}</h4>
      </div>
    );
    return this.state.showDetails ? pigInfo : pigName;
  }
}

export default Pig;
