import React, { Component } from 'react';
import './App.css';
import './vendor/simplegrid/simple-grid.css';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


import SearchPage from './SearchPage.js';
import MainPage from './MainPage.js';





class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={ MainPage }/>
            <Route path="/search" component={ SearchPage }/>       
          </div>
        </Router>
    );
  }
}

export default App;
