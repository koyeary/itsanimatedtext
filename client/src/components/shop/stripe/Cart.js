import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { Modal, Button } from 'react-bootstrap';
import Checkout from './Checkout';

//import CardSection from './CardSection';
import './CheckoutFormStyle.css';

export default function Cart() {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const cart = <i className='fa fa-shopping-cart' aria-hidden='true' />;

  return (
    <Fragment>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Checkout />
        </Modal.Body>
      </Modal>

      <Button data-toggle='button' onClick={handleShow}>
        {cart} Cart
      </Button>
    </Fragment>
  );
}
