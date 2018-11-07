import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Common/Search';

class Landing extends Component {
    render() {
        return (
            <div>
                <Search navigation={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isAuthenticated, user } = auth;

    return { isAuthenticated, user };
}


export default connect(mapStateToProps, null)(Landing);
