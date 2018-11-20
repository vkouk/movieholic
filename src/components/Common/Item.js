import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from './Popup';
import { addToCart } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

class Item extends Component {
    state = {
        'popupOpen': false,
        'product': {
            _id: this.props._id,
            title: this.props.title,
            genre: this.props.genre,
            writer: this.props.writer,
            released: this.props.released,
            rating: this.props.rating,
            poster: this.props.poster,
            plot: this.props.plot
        }
    };

    onPopupToggle = () => {
        this.setState(prevState => ({
            popupOpen: !prevState.popupOpen
        }));
    };

    onButtonClick = () => {
        const dataType = this.props.location.slice(1, -1);

        if (dataType === 'movie') {
            const duplicatedMovies = () => (this.props.cart.movie ? this.props.cart.movie.some(movie => movie._id === this.state.product._id) : false);

            if (!_.isEmpty(this.props.cart.movie) && Object.keys(this.props.cart.movie).length >= 1) {
                if (duplicatedMovies())
                    return;

                this.props.addToCart({ ...this.props.cart, movie: [this.state.product, ...this.props.cart.movie] });
            } else {
                this.props.addToCart({ ...this.props.cart, movie: [this.state.product] });
            }
        } else {
            const duplicatedSeries = () => (this.props.cart.serie ? this.props.cart.serie.some(serie => serie._id === this.state.product._id) : false);

            if (!_.isEmpty(this.props.cart.serie) && Object.keys(this.props.cart.serie).length >= 1) {
                if (duplicatedSeries())
                    return;

                this.props.addToCart({ ...this.props.cart, serie: [this.state.product, ...this.props.cart.serie] });
            } else {
                this.props.addToCart({ ...this.props.cart, serie: [this.state.product] });
            }
        }
    };

    onAddToCart = e => {
        e.preventDefault();

        this.onButtonClick();
    };

    render() {
        return (
            <div className={`${this.props.isHeaderVisible ? 'list__col--small' : 'list__col'}`}>
                <div onClick={this.onPopupToggle}>
                    <div className="list__item">
                        <img src={this.props.poster !== 'N/A' ? this.props.poster : 'https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png'} className="w-100 list__item__img" alt={this.props.title} />
                        <div className="list__item__content">
                            <div className="list__item__text">{this.props.title}</div>
                            <small className="list__item__subtext list__item__subtext--borderless">{this.props.genre}</small>
                            <div className="list__item__subcontent">
                                <small className="list__item__subtext">{this.props.stock} left in stock</small>
                                <FontAwesomeIcon icon={faStar} className="fa-md list__item__icon" />  <div className="list__item__text list__item__text--small">{typeof this.props.rating === 'undefined' || this.props.rating === null || this.props.rating === 'N/A' ? 'N/A' : this.props.rating}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.popupOpen && <Popup {...this.props} onClose={this.onPopupToggle} addToCart={this.onAddToCart} />}
            </div>
        );
    }
}

const mapStateToProps = ({ rent }) => {
    const { cart } = rent;

    return { cart };
}

export default connect(mapStateToProps, { addToCart })(Item);