import React, { Component } from 'react';

class HogTile extends Component {
  state = {
    selected: false
  }

  clickHandler = () => {
    if (this.state.selected === false) {
      this.setState({
        selected: true
      })
    } else {
      this.setState({
        selected: false
      })
    }
  }

  render() {
    let pigData;
    
    if (this.state.selected) {
      pigData = 
        <div>
          <h3>{this.props.hog.name}</h3>
          <h4>Specialty: {this.props.hog.specialty}</h4>
          <h4>Greased: {this.props.hog.greased + ""}</h4>
          <h4>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog.weight}</h4>
          <h4>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</h4>
        </div> 
    } else {
      pigData =
        <div>
          <h3>{this.props.hog.name}</h3>
          <img name={this.props.hog.name} src={this.props.hog.image} alt="a fat fucking pig"/>
        </div>
    }
      
    return (
      <div className="pigTile ui four wide column" onClick={this.clickHandler}>
        {pigData}
      </div>

      // <div className="pigTile flip-container" ontouchstart="this.NameList.toggle('hover');">
      //   <div className="flipper">
      //     <div className="front">
      //       <h3>{this.props.hog.name}</h3>
      //       <img name={this.props.hog.name} src={this.props.hog.image} alt="a fat fucking pig"/>
      //     </div>
      //     <div className="back">
      //       <h3>{this.props.hog.name}</h3>
      //       <h4>Specialty: {this.props.hog.specialty}</h4>
      //       <h4>Greased: {this.props.hog.greased + ""}</h4>
      //       <h4>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog.weight}</h4>
      //       <h4>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</h4>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default HogTile;