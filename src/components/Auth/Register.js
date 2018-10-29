import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
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

    onFormChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.registerUser(this.state, this.props.history);
    };

    render() {
        return (
            <div className="form">
                <form className="form__content" onSubmit={this.onFormSubmit}>
                    <input
                        className="form__input"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onFormChange}
                        placeholder="Email..."
                    />
                    <input
                        className="form__input"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onFormChange}
                        placeholder="Username..."
                    />
                    <input
                        className="form__input"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onFormChange}
                        placeholder="Password..."
                    />
                    <input className="form__submit" type="submit" />
                    {this.props.error && <p className="form__error">{this.props.error}</p>}
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { error, isAuthenticated } = auth;

    return { error, isAuthenticated };
}

export default connect(mapStateToProps, { registerUser })(Register);