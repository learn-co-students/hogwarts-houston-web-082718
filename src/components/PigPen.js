import React, { Component } from 'react';
import HogTile from './HogTile.js'

class PigPen extends Component {
    render() {
        return (
            <div className="ui grid container App" >
                {this.props.hogs.map(hog => {
                    return (
                        <HogTile key={hog.name} hog={hog} />
                    )
                })}
            </div>
        )
    }
}

export default PigPen;