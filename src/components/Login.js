import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';

class Login extends Component {
    state = {
        'email': '',
        'username': '',
        'password': ''
    };

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/profile');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            this.props.history.push('/profile');
        }
    }

    onFormChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.loginUser(this.state);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                {this.props.error && <p className="form__error">{this.props.error}</p>}
                <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onFormChange}
                />
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onFormChange}
                />
                <input type="submit" />
            </form>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { error, isAuthenticated } = auth;

    return { error, isAuthenticated };
}

export default connect(mapStateToProps, { loginUser })(Login);