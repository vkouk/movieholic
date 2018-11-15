import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routers from '../routers/Routers';
import setAuthToken from '../utils/AuthToken';
import { getCart } from '../actions';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

class App extends Component {
  state = {
    isHeaderVisible: false
  };

  componentDidMount() {
    this.props.getCart();
  }

  onHeaderToggle = () => {
    this.setState(prevState => ({
      isHeaderVisible: !prevState.isHeaderVisible
    }));
  };

  render() {
    return <Routers
      {...this.state}
      onHeaderToggle={this.onHeaderToggle}
    />;
  }
}

export default connect(null, { getCart })(App);
