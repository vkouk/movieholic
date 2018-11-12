import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Config } from './Config';
import { addUserBalance } from '../actions';

class AddBalance extends React.Component {
    state = {
        amount: 500
    };

    render() {
        const { amount } = this.state;

        return (
            <StripeCheckout
                name="Movieholic"
                description={`€${amount} for deposit`}
                amount={amount}
                token={data => this.props.addUserBalance({ amount, id: data.id, userId: this.props.userId })}
                stripeKey={Config.STRIPE_KEY}
            >
                <button className="btn">
                    Add Balance
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, { addUserBalance })(AddBalance);