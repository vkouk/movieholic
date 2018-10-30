import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Link } from 'react-router-dom';

class Header extends Component {
    onLogout = e => {
        e.preventDefault();

        this.props.logoutUser();
    };

    render() {
        return (
            <header className="header">
                <div className="header__content">
                    <div className="header__logo">
                        <img src="./images/logo.png" alt="Movieholic Logo" />
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu__item">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to={"/movies"}>Movies</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to={"/series"}>Series</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to={"/cart"}>Cart</Link>
                        </li>
                        {
                            this.props.user.isAdmin ?
                                <li className="header__menu__item">
                                    <Link to={"/dashboard"}>Dashboard</Link>
                                </li>
                                : null
                        }
                        <li className="header__menu__item">
                            {
                                this.props.isAuthenticated ? <a href="javascript:void(0)" onClick={this.onLogout}>Logout</a> : <Link to={"/register"}>Register</Link>
                            }
                        </li>
                        {
                            this.props.isAuthenticated ? null :
                                <li className="header__menu__item">
                                    <Link to={"/login"}>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </header>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isAuthenticated, user } = auth;

    return { isAuthenticated, user };
}

export default connect(mapStateToProps, { logoutUser })(Header);
