import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { Link } from 'react-router-dom';
import ProfileIcon from '../Profile/ProfileIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    state = {
        isHeaderVisible: false
    };

    onLogout = e => {
        e.preventDefault();

        this.props.logoutUser();
    };

    onToggle = () => {
        this.setState(prevState => ({
            isHeaderVisible: !prevState.isHeaderVisible
        }));
    };

    render() {
        const cartCount = (this.props.cart.movie ? this.props.cart.movie.length : 0) + (this.props.cart.serie ? this.props.cart.serie.length : 0);

        return (
            <div>
                <button onClick={this.onToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
                    aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={`animated-icon1 ${this.state.isHeaderVisible ? 'open' : ''}`}><span></span><span></span><span></span></div>
                </button>

                <header className={`header ${this.state.isHeaderVisible ? 'is-visible' : ''}`}>
                    <div className="header__content">
                        <div className="header__logo">
                            <Link to={'/'}><img src="./images/logo.png" alt="Movieholic Logo" /></Link>
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
                    <div className="header__footer">
                        <div className="header__footer__content">
                            <div className="header__social">
                                <div className="header__social__item">
                                    facebook
                            </div>
                            </div>
                            <div className="header__copyrights">
                                All Rights Reserved - Vasilis Koukoutis (vkouk)
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
