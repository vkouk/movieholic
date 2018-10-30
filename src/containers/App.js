import React, { Component } from 'react';
import Routers from '../routers/Routers';
import setAuthToken from '../utils/AuthToken';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

class App extends Component {
  render() {
    return (
      <div className="w-100">
        <Routers />
      </div>
    );
  }
}

export default App;
