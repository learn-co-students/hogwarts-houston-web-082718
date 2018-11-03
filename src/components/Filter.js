import React, { Component } from 'react';
import '../App.css';

const Filter = (props) => {
    return (
      <div className="filterWrapper">
          Sort By: 
          <select onChange={(e) => {props.setSortBy(e.target.value)}} >
              <option value="None">None</option>
              <option value="Name">Name</option>
              <option value="Weight">Weight</option>
          </select>
          Greased?: 
          <input type="checkbox" onClick={props.setGreased} />
      </div>
    )
}

export default Filter;