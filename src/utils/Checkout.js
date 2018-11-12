import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Config } from './Config';
import { addUserBalance } from '../actions';

class AddBalance extends React.Component {
    render() {
        const { userId } = this.props;

        return (
            <StripeCheckout
                name="Movieholic"
                currency="EUR"
                description={`€${parseInt(this.props.amount)} for deposit`}
                amount={parseInt(this.props.amount) * 100}
                token={({ id }) => this.props.addUserBalance({ amount: parseInt(this.props.amount), id, userId })}
                stripeKey={Config.STRIPE_KEY}
                image="http://movieholic.herokuapp.com/images/logo.png"
            >
                <button className="btn">
                    Add Balance
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, { addUserBalance })(AddBalance);