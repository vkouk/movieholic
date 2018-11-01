import React, { Component } from 'react';
import { connect }  from 'react-redux';
import Routers from '../routers/Routers';
import setAuthToken from '../utils/AuthToken';
import { getCart } from '../actions';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

class App extends Component {
  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <div className="w-100">
        <Routers />
      </div>
    );
  }
}

export default connect(null, { getCart })(App);
