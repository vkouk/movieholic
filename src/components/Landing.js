import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './Common/Search';

class Landing extends Component {
    render() {
        return (
            <div>
                <Search navigation={this.props.history} />
                <Link to={`/profile/${this.props.user._id}`}><div className="container">Hello {this.props.user.username && `, ${this.props.user.username}`}</div></Link>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isAuthenticated, user } = auth;

    return { isAuthenticated, user };
}


export default connect(mapStateToProps, null)(Landing);
