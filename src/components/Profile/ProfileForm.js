import React, { Component } from 'react';
import AddBalance from '../../utils/AddBalance';

class ProfileForm extends Component {
    state = {
        "email": this.props.email,
        "username": this.props.username,
        "amount": 0
    }

    onFormUpdate = e => {
        e.preventDefault();

        this.props.onFormSubmit({ email: this.state.email, username: this.state.username });
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
                    <input
                        className="form__input"
                        type="number"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.onFormChange}
                        placeholder="Add Balance Amount..."
                    />
                    <input className="form__submit" type="submit" />
                    {this.props.error && <p className="form__error">{this.props.error}</p>}
                </form>
                <AddBalance
                    userId={this.props._id}
                    amount={this.state.amount}
                />
            </div>
        );
    }
}

export default ProfileForm;