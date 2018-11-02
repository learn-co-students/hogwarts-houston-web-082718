import React from 'react'
import { Component } from 'react'


export default class Hog extends Component {

    state = {
        select: true
    }

    handleClick = () => {
        const r = this.state.select ? this.state.select = false : this.state.select = true
        this.setState({ r })
    }

    render() {
        const { hog, renderImage } = this.props
        console.log(hog)

        const w = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

            return (
                <div className="ui link card" onClick={ this.handleClick } >
                {this.state.select
                ? <div className="ui card">
                    <div className="ui header">{hog.name}</div>
                    <img className="ui image" src={ renderImage(hog.name) } />
                  </div>
                : <div>
                    <div className="ui header">Specialty: {hog.specialty}</div>
                    <div className="ui description">Weight: {Math.round(w * 309)}</div>
                    <div className="ui meta">Greased: {String(hog.greased)}</div>
                    <div className="ui extra content">Highest Medal Achieved: {hog['highest medal achieved']}</div>
                  </div>
                }
                </div>
            )
    }

}
