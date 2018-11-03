import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Index from './Index'

const App = () => {
  return (
    <div className="App">
        < Nav />
        < Index hogs={hogs} />
    </div>
  )
}

export default App;
