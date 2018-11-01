import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'
import Filter from './Filter'


class App extends Component {

    state = {
        display: 'all',
        hogs: []
    }

    handleChange = (event) => {
        let updateHog = []
        switch (event.target.value) {
            case 'all':
            updateHog = this.renderAll()
            this.setState({ hogs: updateHog })
                break;
            case 'name':
            updateHog = this.renderName()
            this.setState({ hogs: updateHog })
                break;
            case 'weight':
            updateHog = this.renderWeight()
            this.setState({ hogs: updateHog })
                break;
            case 'greased':
            updateHog = this.renderGreased()
            this.setState({ hogs: updateHog })
                break;
        }
    }

    renderAll = () => {
        return hogs
    }

    renderName = () => {
        return (
            hogs.sort(function(hog1, hog2) {
            let h1 = hog1.name
            let h2 = hog2.name
            return h1.localeCompare(h2)
            })
        )
    }

    renderWeight = () => {
        return (
            hogs.sort(function(hog1, hog2) {
            let h1 = hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
            let h2 = hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
            return h1 - h2
            })
        )
    }

    renderGreased = () => {
        return hogs.filter(hog => hog.greased)
    }

    renderImage = (hogName) => {
        let name = require("../hog-imgs/" + hogName.toLowerCase().replace(/\s/g, '_') + ".jpg")
        return name
    }

    render() {
        return (
            <div className="App">
                < Nav/>
                <Filter handleChange={this.handleChange}/>
                <div className="ui cards">{this.state.hogs.map(hog=> <Hog hog={hog} renderImage={this.renderImage}/>)}</div>
            </div>
        )
    }
}

export default App
