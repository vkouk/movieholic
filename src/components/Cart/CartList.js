import React from 'react';
import CartMovieListItem from './CartMovieListItem';
import CartSerieListItem from './CartSerieListItem';

export default ({ onOrderClick, onMovieCartRemove, onSerieCartRemove, error, cart }) => {
    return (
        <div className="container cart">
            <div className="row">
                <div className="col-sm-4 cart__list">
                    <span className="b f3 bb">Movies in Cart</span>
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
                </div>
                <div className="col-sm-4 cart__list">
                    <span className="b f3 bb">Series in Cart</span>
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
                <div className="col-sm-4 cart__list">
                    <button onClick={onOrderClick}>Order</button>
                </div>
                <div className="col-sm-12">
                    {error && <div className="cart_error">{error}</div>}
                </div>
            </div>
        </div>
    );
};