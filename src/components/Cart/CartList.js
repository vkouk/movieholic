import React from 'react';
import CartMovieListItem from './CartMovieListItem';
import CartSerieListItem from './CartSerieListItem';
import { returnRentTotal } from '../../utils/Helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default ({ isCartVisible, onCartToggle, onOrderClick, onMovieCartRemove, onSerieCartRemove, error, cart }) => {
    return (
        <div className={`cart ${isCartVisible ? 'is-visible' : ''}`}>
            <div className="cart__header">
                <p className="cart__header__title">Cart</p>
                <div onClick={onCartToggle}><FontAwesomeIcon icon={faTimes} className="fa-lg cart__icon" /></div>
            </div>
            <div className="cart__row">
                <div className="list__col list__col--big cart__list">
                    {
                        cart.movie ? cart.movie.map(data => {
                            return (
                                <CartMovieListItem
                                    key={data._id}
                                    {...data}
                                    onMovieCartRemove={onMovieCartRemove}
                                />
                            );
                        }) : []
                    }
                    {
                        cart.serie ? cart.serie.map(data => {
                            return (
                                <CartSerieListItem
                                    key={data._id}
                                    onSerieCartRemove={onSerieCartRemove}
                                    {...data}
                                />
                            );
                        }) : []
                    }
                </div>
            </div>
            <div className="cart__footer">
                <div className="cart__footer__item">
                    <button className="cart__btn" onClick={e => {
                        if (error) {
                            return error;
                        } else {
                            onOrderClick(e);
                            onCartToggle();
                        }
                    }}>Order</button>
                </div>
                <div className="cart__footer__item">
                    <h2 className="f6 fw4 mt2 mb0 black-60">Total amount per day: {returnRentTotal(cart.movie, cart.serie, new Date())}€</h2>
                </div>
                <div className="cart__footer__item">
                    {error && <div className="cart__error">{error}</div>}
                </div>
            </div>
        </div>
    );
};