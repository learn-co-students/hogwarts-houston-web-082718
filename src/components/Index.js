import React, { Component } from 'react';
import '../App.css';
import Filter from './Filter'
import HogTile from './HogTile'

class Index extends Component {

    constructor() {
        super()
        this.state = {
            greased: false,
            sortBy: "None"
        }
    }

    getHogs = () => {
        return this.sortHogs(this.filterGreased([...this.props.hogs]))
    }

    filterGreased = (hogs) => {
        if (this.state.greased) {
            return hogs.filter(hog => {
                return hog.greased
            })
        }
        else {
            return hogs
        }
    }

    sortHogs = (hogs) => {
        switch (this.state.sortBy) {
            case "None":
                return hogs
                break;
            case "Name":
                return hogs.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                break
            case "Weight":
                return hogs.sort((a, b) => {
                    return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
                })
                break
            default:
                console.log('default')
                break;
        }
    }

    setGreased = () => {
        this.setState((state) => ({greased: !state.greased}))
    }

    setSortBy = (sortBy) => {
        this.setState({ sortBy })
    }

    render() {
        return (
        <div className="indexWrapper">
            <Filter setGreased={this.setGreased} setSortBy={this.setSortBy} />
            {
                this.getHogs().map(hog => {
                    return < HogTile hog={hog} />
                })
            }
        </div>
        )
    }
}

export default Index;