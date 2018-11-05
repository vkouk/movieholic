import React, { Component } from 'react';
import CartList from './CartList';
import { connect } from 'react-redux';
import { getCart, storeRent, removeMovieFromCart, removeSerieFromCart, cartTotalAmount } from '../../actions';
import { cartTotal } from '../../utils/Helpers';
import PrivateRoute from '../Common/PrivateRoute';

class Cart extends Component {
    componentDidMount() {
        this.props.getCart();

        const totalCost = cartTotal(this.props.cart.movie) + cartTotal(this.props.cart.serie);
        this.props.cartTotalAmount(totalCost);

        if ((this.props.cart.movie && this.props.cart.movie.length <= 0) && (this.props.cart.serie && this.props.cart.serie.length <= 0)) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate() {
        if ((this.props.cart.movie && this.props.cart.movie.length <= 0) && (this.props.cart.serie && this.props.cart.serie.length <= 0)) {
            this.props.history.push('/');
        }

        const totalCost = cartTotal(this.props.cart.movie) + cartTotal(this.props.cart.serie);
        this.props.cartTotalAmount(totalCost);
    }

    onSerieRemove = (e, serieId) => {
        e.preventDefault();

        this.props.removeSerieFromCart(serieId);
    };

    onMovieRemove = (e, movieId) => {
        e.preventDefault();

        this.props.removeMovieFromCart(movieId);
    };

    onButtonClick = e => {
        e.preventDefault();

        const cartMovies = this.props.cart.movie ? this.props.cart.movie.map(data => data._id) : [];
        const cartSeries = this.props.cart.serie ? this.props.cart.serie.map(data => data._id) : [];

        this.props.storeRent({ userId: this.props.user._id, moviesId: cartMovies, seriesId: cartSeries }, this.props.history);
    };

    render() {
        return (
            <CartList
                onOrderClick={this.onButtonClick}
                onMovieCartRemove={this.onMovieRemove}
                onSerieCartRemove={this.onSerieRemove}
                cart={this.props.cart}
                error={this.props.eror}
            />
        );
    }
}

const mapStateToProps = ({ rent, auth }) => {
    const { cart, cartTotal, error } = rent;
    const { user } = auth;

    return { cart, cartTotal, user, error };
}

export default PrivateRoute(connect(mapStateToProps, { getCart, storeRent, removeMovieFromCart, removeSerieFromCart, cartTotalAmount })(Cart));