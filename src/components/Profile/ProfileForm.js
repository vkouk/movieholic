import React, { Component } from "react";
import AddBalance from "../../utils/AddBalance";

class ProfileForm extends Component {
  state = {
    email: this.props.email,
    username: this.props.username,
    avatar: this.props.avatar,
    amount: 5
  };

  onFormUpdate = e => {
    e.preventDefault();

    this.props.onFormSubmit({
      email: this.state.email,
      username: this.state.username,
      avatar: this.state.avatar
    });
  };

  onFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form">
        <form className="form__content" onSubmit={this.onFormUpdate}>
          <div className="form__header">
            <img
              className="br4 w3"
              src={this.state.avatar}
              alt={this.state.username}
            />
            <p className="form__text">
              Hello, {this.state.username}. Please edit your profile.
            </p>
            <p className="form__text">
              Current balance: {this.props.balance.toFixed(2)}€
            </p>
          </div>
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
          <input
            className="form__input"
            type="url"
            name="avatar"
            value={this.state.avatar}
            onChange={this.onFormChange}
            placeholder="Avatar URL..."
          />
          <div className="form__control">
            <input className="form__submit" type="submit" />
            <AddBalance userId={this.props._id} amount={this.state.amount} />
          </div>
          {this.props.error && (
            <p className="form__error">{this.props.error}</p>
          )}
          {this.state.amount <= 0 && (
            <p className="form__error">Please enter an amount greater than 0</p>
          )}
        </form>
      </div>
    );
  }
}

export default ProfileForm;
