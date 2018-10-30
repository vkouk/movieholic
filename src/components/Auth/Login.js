import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    state = {
        'email': '',
        'username': '',
        'password': ''
    };

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isAuthenticated) {
            nextProps.history.push('/');
        }
        return null;
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

export default connect(mapStateToProps, { loginUser })(Login);