import React from "react";
import "../App.css";

const FrontCard = props => {
  return (
    <div className="pigTile">
      <h3>{props.hog.name}</h3>
      <img src={require(`../hog-imgs/${props.imgName}.jpg`)} alt="" />
    </div>
  );
};

export default FrontCard;
