import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCheckoutSession } from '../../../actions/stripe';
import { Button } from 'react-bootstrap';
//import CheckoutForm from './CheckoutForm';

const Checkout = ({ createCheckoutSession }) => {
    const [checkoutData, setCheckoutData] = useState({
        method: ['card'],
        product: 'T-shirt',
        quantity: 2
    });
    const handleClick = async (e) => {
        e.preventDefault();
        createCheckoutSession(checkoutData);
      }


  return (
    <Fragment>
      <Link to='#' className='btn btn-lg' onClick={handleClick}>Checkout</Link>
    </Fragment>
  );
};

Checkout.propTypes = {
    createCheckoutSession: PropTypes.func.isRequired
}

export default connect(null, { createCheckoutSession })(Checkout);
