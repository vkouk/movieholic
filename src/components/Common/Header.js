import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Link } from 'react-router-dom';
import ProfileIcon from '../Profile/ProfileIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    onLogout = e => {
        e.preventDefault();

        this.props.logoutUser();
    };

    render() {
        const cartCount = (this.props.cart.movie ? this.props.cart.movie.length : 0) + (this.props.cart.serie ? this.props.cart.serie.length : 0);

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
                            <div className="header__cart">
                                <Link className={cartCount >= 1 ? null : 'is-disabled'} to={"/cart"}>
                                    <FontAwesomeIcon icon={faShoppingCart} className="fa-lg header__cart__icon" />
                                    <div className="header__cart__count">{cartCount}</div>
                                </Link>
                            </div>
                        </li>
                        {
                            this.props.user.isAdmin ?
                                <li className="header__menu__item">
                                    <Link to={"/dashboard"}>Dashboard</Link>
                                </li>
                                : null
                        }
                        {
                            <ProfileIcon
                                {...this.props.user}
                                isAuthenticated={this.props.isAuthenticated}
                                onLogout={this.onLogout}
                            />
                        }
                    </ul>
                </div>
            </header>
        );
    }
}

const mapStateToProps = ({ auth, rent }) => {
    const { isAuthenticated, user } = auth;
    const { cart } = rent;

    return { isAuthenticated, user, cart };
}

export default connect(mapStateToProps, { logoutUser })(Header);
