import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Config } from './Config';
import { returnRent } from '../actions';

class Checkout extends React.Component {
    render() {
        return (
            <StripeCheckout
                name="Movieholic"
                currency="EUR"
                description={'Payment for your order is required.'}
                amount={Math.round(this.props.amount) * 100}
                token={({ id }) => this.props.returnRent({ rentId: this.props.rentId, id }, this.props.navigation)}
                stripeKey={Config.STRIPE_KEY}
                image="http://movieholic.herokuapp.com/images/logo.png"
            >
                <button className="list__btn">
                    Return Order
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, { returnRent })(Checkout);