import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, updateProfile, getUserRents } from '../../actions';
import ProfileForm from './ProfileForm';
import ProfileOrders from './ProfileOrders';
class Profile extends Component {
    componentDidMount() {
        if (!this.props.isAuthenticated) {
            this.props.history.push('/');
        }

        this.props.getProfile(this.props.match.params.id);
        this.props.getUserRents(this.props.match.params.id);
    }

    onFormSubmit = profileValues => {
        this.props.updateProfile(profileValues, this.props.match.params.id);
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <ProfileForm
                            {...this.props.user}
                            error={this.props.error}
                            onFormSubmit={this.onFormSubmit}
                        />
                    </div>
                    <div className="col-sm-9">
                        <ProfileOrders
                            orders={this.props.userOrders}
                            error={this.props.error}
                            navigation={this.props.history}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, rent }) => {
    const { user, error, isAuthenticated } = auth;
    const { userOrders } = rent;

    return { user, error, isAuthenticated, userOrders };
};

export default connect(mapStateToProps, { getProfile, updateProfile, getUserRents })(Profile);