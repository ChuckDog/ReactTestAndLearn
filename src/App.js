import React, { Component } from 'react';
import { HashRouter as Router, Route, browserHistory, Link } from 'react-router-dom';
import GetStarted from './GetStarted/GetStarted';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import Calculator from './Calculator/Calculator';
import PuiTest from './PuiTest/PuiTest';
import MessageOne from './Messages/MessageOne';
import MessageTwo from './Messages/MessageTwo';
import logo from './logo.svg';
import './App.css';

class AppWrapper extends Component {

  render() {
    return (
      <div>
        <h2><Link to="getStarted">Get Started</Link></h2>
        <h2><Link to="product_table">Filterable Product Table</Link></h2>
        <h2><Link to="calculator">Calculator</Link></h2>
        <h2><Link to="PuiTest">PuiTest</Link></h2>
        {this.props.children}
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
            <Route exact={true} path="/" component={AppWrapper} history={browserHistory} />
            <Route path="/getStarted" component={GetStarted} />
            <Route path="/getStarted/message1/:id/:name/:abc" component={MessageOne} />
            <Route path="/getStarted/message2/:id" component={MessageTwo} />
            <Route path="/product_table" component={FilterableProductTable} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/PuiTest" component={PuiTest} />
          </div>  
        </Router>
      </div>
    );
  }
}

export default App;