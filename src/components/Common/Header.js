import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Link } from 'react-router-dom';
import ProfileIcon from '../Profile/ProfileIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    onLogout = e => {
        e.preventDefault();

        this.props.logoutUser();
    };

    render() {
        const cartCount = (this.props.cart.movie ? this.props.cart.movie.length : 0) + (this.props.cart.serie ? this.props.cart.serie.length : 0);

        return (
            <div>
                <button onClick={this.props.onHeaderToggle} className="btn-toggle btn-toggle--fixed">
                    <div className={`btn-toggle--icon ${this.props.isHeaderVisible ? 'is-open' : ''}`}><span></span><span></span><span></span></div>
                </button>

                <header className={`header ${this.props.isHeaderVisible ? 'is-visible' : ''}`}>
                    <div className="header__content">
                        <div className="header__logo">
                            <Link to={'/'} onClick={this.props.onHeaderToggle}><img src="./images/logo.png" alt="Movieholic Logo" /></Link>
                        </div>
                        <ul className="header__menu">
                            <li className="header__menu__item">
                                <Link to={"/"} onClick={this.props.onHeaderToggle}>Home</Link>
                            </li>
                            <li className="header__menu__item">
                                <Link to={"/movies"} onClick={this.props.onHeaderToggle}>Movies</Link>
                            </li>
                            <li className="header__menu__item">
                                <Link to={"/series"} onClick={this.props.onHeaderToggle}>Series</Link>
                            </li>
                            <li className="header__menu__item">
                                <div className="header__cart">
                                    <Link className={cartCount >= 1 ? null : 'is-disabled'} to={"/cart"} onClick={this.props.onHeaderToggle}>
                                        <FontAwesomeIcon icon={faShoppingCart} className="fa-lg header__cart__icon" />
                                        <div className="header__cart__count">{cartCount}</div>
                                    </Link>
                                </div>
                            </li>
                            {
                                this.props.user.isAdmin ?
                                    <li className="header__menu__item">
                                        <Link to={"/dashboard"} onClick={this.props.onHeaderToggle}>Dashboard</Link>
                                    </li>
                                    : null
                            }
                            {
                                <ProfileIcon
                                    {...this.props.user}
                                    onHeaderToggle={this.props.onHeaderToggle}
                                    isAuthenticated={this.props.isAuthenticated}
                                    onLogout={this.onLogout}
                                />
                            }
                        </ul>
                    </div>
                    <div className="header__footer">
                        <div className="header__footer__content">
                            <div className="header__social">
                                <div className="header__social__item">
                                    <a href="https://github.com/vkouk"><FontAwesomeIcon icon={faGithub} className="fa-lg header__social__icon" /></a>
                                </div>
                                <div className="header__social__item">
                                    <a href="https://twitter.com/vkoukoutis"><FontAwesomeIcon icon={faTwitter} className="fa-lg header__social__icon" /></a>
                                </div>
                                <div className="header__social__item">
                                    <a href="https://linkedin.com/in/vkoukoutis"><FontAwesomeIcon icon={faLinkedinIn} className="fa-lg header__social__icon" /></a>
                                </div>
                            </div>
                            <div className="header__copyrights">
                                developed by vkouk
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, rent }) => {
    const { isAuthenticated, user } = auth;
    const { cart } = rent;

    return { isAuthenticated, user, cart };
}

export default connect(mapStateToProps, { logoutUser })(Header);
