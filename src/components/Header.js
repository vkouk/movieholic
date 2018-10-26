import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__content">
                    <div className="header__logo">
                        <img src="https://creator.design/_logos/30/logo-30_09.png" alt="Movieholic Logo" />
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/series">Series</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/cart">Cart</Link>
                        </li>
                        {/* Check if user is admin or not. */}
                        <li className="header__menu__item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
