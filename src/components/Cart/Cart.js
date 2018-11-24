import React, { Component } from 'react';
import CartList from './CartList';
import { connect } from 'react-redux';
import { getCart, storeRent, removeMovieFromCart, removeSerieFromCart } from '../../actions';
import PrivateRoute from '../Common/PrivateRoute';

class Cart extends Component {
    componentDidMount() {
        this.props.getCart();

        if ((this.props.cart.movie && this.props.cart.movie.length <= 0) && (this.props.cart.serie && this.props.cart.serie.length <= 0)) {
            this.props.history.push('/');
        } else if (!this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate() {
        if ((this.props.cart.movie && this.props.cart.movie.length <= 0) && (this.props.cart.serie && this.props.cart.serie.length <= 0)) {
            this.props.onCartToggle();
            this.props.history.push('/');
        }
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
                isCartVisible={this.props.isCartVisible}
                onCartToggle={this.props.onCartToggle}
                onOrderClick={this.onButtonClick}
                onMovieCartRemove={this.onMovieRemove}
                onSerieCartRemove={this.onSerieRemove}
                cart={this.props.cart}
                error={this.props.error}
            />
        );
    }
}

const mapStateToProps = ({ rent, auth }) => {
    const { cart, cartTotal, error } = rent;
    const { user, isAuthenticated } = auth;

    return { cart, cartTotal, user, isAuthenticated, error };
}

export default PrivateRoute(connect(mapStateToProps, { getCart, storeRent, removeMovieFromCart, removeSerieFromCart })(Cart));