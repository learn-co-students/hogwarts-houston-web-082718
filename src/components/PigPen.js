import React, { Component } from 'react';
import PigCard from './PigCard';
import Filter from './Filter';
import hogs from '../porkers_data.js';

class PigPen extends Component {
  render() {
    return (
      <div>
        <Filter />
        {hogs.map(hog => {
          return <PigCard {...hog} key={hog.name} />;
        })}
      </div>
    );
  }
}

export default PigPen;
