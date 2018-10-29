import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    render() {
        return (
            <div className={"container"}>Hello {this.props.user.username && `, ${this.props.user.username}`}</div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isAuthenticated, user } = auth;

    return { isAuthenticated, user };
}


export default connect(mapStateToProps, null)(Landing);
