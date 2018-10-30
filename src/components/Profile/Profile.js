import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions';
import ProfileForm from './ProfileForm';
class Profile extends Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.id);
    }

    onFormSubmit = e => {
        e.preventDefault();
    };

    onFormChange = e => {
        e.preventDefault();
    }

    render() {
        return <ProfileForm
            {...this.props.user}
            onFormSubmit={this.onFormSubmit}
            onFormChange={this.onFormChange}
        />
    }
}

const mapStateToProps = ({ auth }) => {
    const { user } = auth;

    return { user };
}

export default connect(mapStateToProps, { getProfile })(Profile);