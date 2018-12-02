import React, { Component } from "react";
import { connect } from "react-redux";
import Routers from "../routers/Routers";
import setAuthToken from "../utils/AuthToken";
import { getCart } from "../actions";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

class App extends Component {
  state = {
    isHeaderVisible: false,
    isCartVisible: false
  };

  componentDidMount() {
    this.props.getCart();
  }

  onHeaderToggle = () => {
    this.setState(prevState => ({
      isHeaderVisible: !prevState.isHeaderVisible
    }));
  };

  onCartToggle = () => {
    this.setState(prevState => ({
      isCartVisible: !prevState.isCartVisible
    }));
  };

  render() {
    return (
      <Routers
        {...this.state}
        onHeaderToggle={this.onHeaderToggle}
        onCartToggle={this.onCartToggle}
      />
    );
  }
}

export default connect(
  null,
  { getCart }
)(App);
