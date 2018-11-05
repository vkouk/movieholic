import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../Common/SingleDetailItem';
import { getMovie, addToCart, cartTotalAmount } from '../../actions';
import PrivateRoute from '../Common/PrivateRoute';
import { cartTotal } from '../../utils/Helpers';
import _ from 'lodash';

class MovieDetail extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.title);
    }

    componentDidUpdate() {
        this.props.cartTotalAmount(cartTotal(this.props.cart.movie));
    }

    onButtonClick = e => {
        e.preventDefault();
        const duplicatedMovies = () => (this.props.cart.movie ? this.props.cart.movie.some(movie => movie._id === this.props.movie.movie._id) : false);

        if (!_.isEmpty(this.props.cart.movie) && Object.keys(this.props.cart.movie).length >= 1) {
            if (duplicatedMovies())
                return;

            this.props.addToCart({ ...this.props.cart, movie: [this.props.movie.movie, ...this.props.cart.movie] });
        } else {
            this.props.addToCart({ ...this.props.cart, movie: [this.props.movie.movie] });
        }
    };

    render() {
        return (
            <MovieItem
                {...this.props.movie.movie}
                user={this.props.user}
                onButtonClick={this.onButtonClick}
            />
        );
    }
}

const mapStateToProps = ({ movie, auth, rent }) => {
    const { user } = auth;
    const { cart } = rent;

    return { movie, user, cart };
}

export default PrivateRoute(connect(mapStateToProps, { getMovie, addToCart, cartTotalAmount })(MovieDetail));