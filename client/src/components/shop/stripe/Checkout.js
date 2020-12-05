import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCheckoutSession } from '../../../actions/stripe';
import { Button } from 'react-bootstrap';
//import CheckoutForm from './CheckoutForm';

const Checkout = ({ createCheckoutSession, /* quantity  */}) => {
    const handleClick = async (e) => {
        e.preventDefault();
        createCheckoutSession(1);
      };

  return (
    <Fragment>
      <Link to='#' className='btn btn-lg' onClick={handleClick}>Checkout</Link>
    </Fragment>
  );
};

Checkout.propTypes = {
    createCheckoutSession: PropTypes.func.isRequired,
   // quantity: PropTypes.object.isRequired
}

export default connect(null, { createCheckoutSession })(Checkout);
