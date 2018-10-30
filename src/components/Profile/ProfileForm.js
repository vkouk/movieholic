import React, { Component } from 'react';

class ProfileForm extends Component {
    state = {
        "email": '',
        "username": ''
    }

    render() {
        const { email, username, onFormSubmit, onFormChange } = this.props;

        return (
            <div className="form">
                <form className="form__content" onSubmit={onFormSubmit}>
                    <input
                        className="form__input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onFormChange}
                        placeholder="Email..."
                    />
                    <input
                        className="form__input"
                        type="text"
                        name="text"
                        value={username}
                        onChange={onFormChange}
                        placeholder="Username..."
                    />
                    <input className="form__submit" type="submit" />
                </form>
            </div>
        );
    }
}

export default ProfileForm;