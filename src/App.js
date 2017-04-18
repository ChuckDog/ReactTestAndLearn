import React, { Component } from 'react';
import { HashRouter as Router, Route, browserHistory } from 'react-router-dom'
import GetStarted from './GetStarted/GetStarted';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import Calculator from './Calculator/Calculator';
import logo from './logo.svg';
import './App.css';

class AppWrapper extends Component {

  render() {
    return (
      <div>
        <h2><a href="#/getStarted">Get Started</a></h2>
        <h2><a href="#/product_table">Filterable Product Table</a></h2>
        <h2><a href="#/calculator">Calculator</a></h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <Route exact path="/" component={AppWrapper} history={browserHistory} />
            <Route path="/getStarted" component={GetStarted} />
            <Route path="/product_table" component={FilterableProductTable} />
            <Route path="/calculator" component={Calculator} />
          </div>  
        </Router>
      </div>
    );
  }
}

export default App;