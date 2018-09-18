import React, { Component } from 'react';
import Routers from '../routers/Routers';
import Header from "../components/Header";

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            <Routers/>
        </div>
    );
  }
}

export default App;
