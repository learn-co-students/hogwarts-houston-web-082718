import piggy from '../porco.png'
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
                <div onClick={ this.handleClick } >
                {this.state.select
                ? <div>
                    <div>Name: {hog.name}</div>
                    <img src={ renderImage(hog.name) } />
                  </div>
                : <div>
                    <div>Specialty: {hog.specialty}</div>
                    <div>Weight: {Math.round(w * 309)}</div>
                    <div>Greased: {String(hog.greased)}</div>
                    <div>Highest Medal Achieved: {hog['highest medal achieved']}</div>
                  </div>
                }
                </div>
            )
    }

}
