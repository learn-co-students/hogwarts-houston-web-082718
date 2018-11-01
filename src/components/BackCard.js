import React from "react";

const BackCard = props => {
  return (
    <div className="pigTile">
      <ul>
        <li>{props.hog.specialty}</li>
        <li>{`${props.hog.greased}`}</li>
        <li>
          {
            props.hog[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          }
        </li>
        <li>{props.hog["highest medal achieved"]}</li>
      </ul>
    </div>
  );
};

export default BackCard;
