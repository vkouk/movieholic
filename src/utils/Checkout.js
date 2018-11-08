import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Config } from './Config';

class Checkout extends React.Component {
    onToken = (token, addresses) => {
        // TODO: Send the token information and any other
        // relevant information to your payment process
        // server, wait for the response, and update the UI
        // accordingly. How this is done is up to you. Using
        // XHR, fetch, or a GraphQL mutation is typical.
    };

    render() {
        return (
            <StripeCheckout
                name="Movieholic"
                description="€5 for 5 email credits"
                amount={500}
                token={() => localStorage.getItem('token')}
                stripeKey={Config.STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}

export default Checkout;