import React, { Component } from 'react';
import { connect } from 'react-redux';
import SerieItem from '../Common/SingleDetailItem';
import { getSerie, addToCart } from '../../actions';
import PrivateRoute from '../Common/PrivateRoute';
import _ from 'lodash';

class SerieDetail extends Component {
    componentDidMount() {
        this.props.getSerie(this.props.match.params.title);
    }

    onButtonClick = e => {
        e.preventDefault();
        const duplicatedSeries = () => (this.props.cart.serie ? this.props.cart.serie.some(serie => serie._id === this.props.serie.serie._id) : false);

        if (!_.isEmpty(this.props.cart.serie) && Object.keys(this.props.cart.serie).length >= 1) {
            if (duplicatedSeries())
                return;

            this.props.addToCart({ ...this.props.cart, serie: [this.props.serie.serie, ...this.props.cart.serie] });
        } else {
            this.props.addToCart({ ...this.props.cart, serie: [this.props.serie.serie] });
        }
    };

    render() {
        return (
            <SerieItem
                {...this.props.serie.serie}
                user={this.props.user}
                onButtonClick={this.onButtonClick}
            />
        );
    }
}

const mapStateToProps = ({ serie, auth, rent }) => {
    const { user } = auth;
    const { cart } = rent;

    return { serie, user, cart };
}

export default PrivateRoute(connect(mapStateToProps, { getSerie, addToCart })(SerieDetail));