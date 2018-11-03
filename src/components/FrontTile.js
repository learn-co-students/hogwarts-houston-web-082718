import React, { Component } from 'react';
import '../App.css';

const FrontTile = (props) => {
    return (
        <div>
            <h3>{props.hog.name}</h3>
            <img src={require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`)} />
        </div>
    )
}

export default FrontTile;