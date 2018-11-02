import React, { Component } from 'react';
import PigDetails from './PigDetails';

class PigCard extends Component {
  state = {
    showDetails: false
  };
  toggleShowDetails = () => {
    this.setState(state => ({
      showDetails: !state.showDetails
    }));
  };

  render() {
    const imageName = this.props.name
      .toLowerCase()
      .split(' ')
      .join('_');
    return (
      <div className="pigTile" onClick={this.toggleShowDetails}>
        {this.state.showDetails ? (
          <PigDetails {...this.props} />
        ) : (
          <div>
            <h1>{this.props.name}</h1>
            <img
              src={require('../hog-imgs/' + imageName + '.jpg')}
              alt="a slice of hog heaven"
            />
          </div>
        )}
      </div>
    );
  }
}

export default PigCard;
