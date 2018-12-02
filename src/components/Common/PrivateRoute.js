import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

export default WrappedComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push("/");
      }
    }

    componentDidUpdate() {
      if (!this.props.isAuthenticated) {
        this.props.history.push("/");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => {
    const { isAuthenticated } = auth;

    return { isAuthenticated };
  };

  return connect(mapStateToProps)(withRouter(ComposedComponent));
};
