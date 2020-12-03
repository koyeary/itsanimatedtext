import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Modal, Button } from 'react-bootstrap';

//import CardSection from './CardSection';
import './CheckoutFormStyle.css';

export default function CheckoutForm() {
  const [show, setShow] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen'
        }
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  const cart = <i className='fa fa-shopping-cart' aria-hidden='true' />;

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {/* <CardSection /> */}
            <CardElement/>
            <button disabled={!stripe}>Confirm order</button>
          </form>
        </Modal.Body>
      </Modal>

      <Button data-toggle='button' onClick={handleShow}>
        {cart} Cart
      </Button>
    </Fragment>
  );
}
