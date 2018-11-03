import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, storeRent } from '../../actions';
import PrivateRoute from '../Common/PrivateRoute';

class Cart extends Component {
    componentDidMount() {
        this.props.getCart();
    }

    onButtonClick = e => {
        e.preventDefault();

        const cartMovies = this.props.cart.movie ? this.props.cart.movie.map(data => data._id) : [];
        const cartSeries = this.props.cart.serie ? this.props.cart.serie.map(data => data._id) : [];

        this.props.storeRent({ userId: this.props.user._id, moviesId: cartMovies, seriesId: cartSeries }, this.props.history);
    };

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Order</button>
                <div>{this.props.eror}</div>
            </div>
        );
    }
}

const mapStateToProps = ({ rent, auth }) => {
    const { cart, cartTotal, error } = rent;
    const { user } = auth;

    return { cart, cartTotal, user, error };
}

export default PrivateRoute(connect(mapStateToProps, { getCart, storeRent })(Cart));