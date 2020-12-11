import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCheckoutSession, getSessionId } from '../../../actions/stripe';
import { Button, Form } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
//import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(
  'pk_test_51H5LHsBHBGQzSzD9juY9SuEcN29aSPSDtI2pIosRPM9WPqcYi6ZmonFYAzXhUC9ybfRWEp5OTQcnUa7M9FaFYLOQ00jfZYwGrA'
);

const Checkout = ({ createCheckoutSession, id }) => {
    const [checkoutData, setCheckoutData] = useState({
        method: ['card'],
        product: 'T-shirt',
        quantity: 2
    });
    const handleClick = async (e) => {
      e.preventDefault();
      createCheckoutSession(checkoutData);
      /* const stripe = await stripePromise;
      const response = await createCheckoutSession(checkoutData);
      const session = await response.json;

      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      //'cs_test_a1iQ47iE3EmUUBpeCbm4DG4IRYKvrnDPZba3GO1ekAK5rJlYq6Qil9NmNy'
  
         if (result.error) {
          console.log('error');
        }  */
      }

  return (
    <Fragment>
      <Link to='#' className='btn btn-lg' onClick={handleClick}>Checkout</Link>
    </Fragment>
  );
};

Checkout.propTypes = {
    createCheckoutSession: PropTypes.func.isRequired
    //id: PropTypes.object.isRequired
    //stripePromise: PropTypes.func.isRequired
}

/* const mapStateToProps = (state) => ({
  id: state.id
}) */

export default connect(null, { createCheckoutSession })(Checkout);
