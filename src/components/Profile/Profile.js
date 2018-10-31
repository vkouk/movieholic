import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../actions';
import ProfileForm from './ProfileForm';
class Profile extends Component {
    componentDidMount() {
        if (!this.props.isAuthenticated) {
            this.props.history.push('/');
        }

        this.props.getProfile(this.props.match.params.id);
    }

    onFormSubmit = profileValues => {
        this.props.updateProfile(profileValues, this.props.match.params.id);
    };

    render() {
        return <ProfileForm
            {...this.props.user}
            error={this.props.error}
            onFormSubmit={this.onFormSubmit}
        />
    }
}

const mapStateToProps = ({ auth }) => {
    const { user, error, isAuthenticated } = auth;

    return { user, error, isAuthenticated };
}

export default connect(mapStateToProps, { getProfile, updateProfile })(Profile);