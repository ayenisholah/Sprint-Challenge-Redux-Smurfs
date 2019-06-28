import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import SmurfView from './views/SmurfViews';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.errorMessage
          && <h2 style={{color: 'red'}}>{ this.props.errorMessage }</h2>
        }
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Route path='/' component={Home} />
        <Route path='/smurfs' component={SmurfView} />
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    errorMessage: reducers.errorMessage
  }
}

export default connect(
  mapStateToProps
)(App);
