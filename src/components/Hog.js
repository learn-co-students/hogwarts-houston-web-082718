import React from "react";
import FrontCard from "./FrontCard.js";
import BackCard from "./BackCard.js";
import "../App.css";

class Hog extends React.Component {
  constructor() {
    super();
    this.state = {
      side: "Front"
    };
  }

  flipCard = () => {
    //show specialty
    this.state.side === "Front"
      ? this.setState({ side: "Back" })
      : this.setState({ side: "Front" });
  };

  render() {
    const { hog } = this.props;
    const imgName = hog.name.toLowerCase().replace(/ /g, "_");
    return (
      <div className="ui eight wide column" onClick={this.flipCard}>
        {this.state.side === "Front" ? (
          <FrontCard hog={hog} imgName={imgName} />
        ) : (
          <BackCard hog={hog} />
        )}
      </div>
    );
  }
}

export default Hog;
