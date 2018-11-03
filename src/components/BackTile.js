import React, { Component } from 'react';
import '../App.css';

const BackTile = (props) => {
  const { hog } = props
  return (
    <div className="hoggyText">
      <h3>{hog.name}</h3><br/><br/>
      <p>Specialty: {hog.specialty}</p>
      <p>{hog.greased ? "Greased" : "Not Greased" }</p>
      <p>Weight: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p className="achievementText">Medal: {hog['highest medal achieved']}</p>
    </div>
  )
}

export default BackTile;