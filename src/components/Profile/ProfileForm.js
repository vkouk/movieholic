import React, { Component } from 'react';
import Checkout from '../../utils/Checkout';

class ProfileForm extends Component {
    state = {
        "email": this.props.email,
        "username": this.props.username
    }

    onFormUpdate = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state);
    };

    onFormChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="form">
                <form className="form__content" onSubmit={this.onFormUpdate}>
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
                    <input className="form__submit" type="submit" />
                    {this.props.error && <p className="form__error">{this.props.error}</p>}
                </form>
                <Checkout userId={this.props._id} />
            </div>
        );
    }
}

export default ProfileForm;