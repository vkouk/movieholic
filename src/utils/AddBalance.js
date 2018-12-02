import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Config } from "./Config";
import { addUserBalance } from "../actions";

class AddBalance extends React.Component {
  render() {
    const { userId } = this.props;

    return (
      <StripeCheckout
        name="Movieholic"
        currency="EUR"
        description={"Deposit € to your account."}
        amount={Math.round(this.props.amount) * 100}
        token={({ id }) =>
          this.props.addUserBalance({
            amount: Math.round(this.props.amount),
            id,
            userId
          })
        }
        stripeKey={Config.REACT_APP_STRIPE_KEY}
        image="http://movieholic.herokuapp.com/images/logo.png"
      >
        <div className="form__btn">Add Balance</div>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  { addUserBalance }
)(AddBalance);
