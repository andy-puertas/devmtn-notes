import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Private from './components/Private/Private';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route component={ Login } exact path="/"/>
            <Route component={ Private } path="/private"/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
