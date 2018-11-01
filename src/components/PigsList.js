// Shows each individual pig
import React, { Component } from "react";
import Pig from "./Pig.js";

class PigsList extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.pigs.map((pig, idx) => {
          return <Pig key={idx} pig={pig} />;
        })}
      </div>
    );
  }
}

export default PigsList;
