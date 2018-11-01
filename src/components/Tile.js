import React from 'react'

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    onClickHandler = () => {
        let div = document.getElementById(this.props.hog.name)
        if (div.hidden) {
            div.hidden = false
        } else {
            div.hidden = true
        }
    }

    hideHog = (event) => {
        let div = event.target.parentNode
        div.hidden = true
    }

    render() {
        return (
            < div className='pigTile' onClick={this.onClickHandler} >
                <h3>{this.props.hog.name}</h3>
                <img src={this.props.hog.img}></img>
                <div id={this.props.hog.name} hidden >
                    <p>Specialty: {this.props.hog.specialty}</p>
                    <p>Greased: {this.props.hog.greased.toString()}</p>
                    <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} tons</p>
                    <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
                </div>
                <br /><button onClick={this.hideHog}>Hide This Hog</button>
            </div >
        )
    }
}