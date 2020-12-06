import api from '../utils/api';
import { setAlert } from './alert';
import {
  STRIPE_ERROR,
  CREATE_PAYMENT_INTENT,
  CREATE_CHECKOUT_SESSION
} from './types';

export const createCheckoutSession = checkoutData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await api.post('/stripe/create-checkout-session', checkoutData, config);

    dispatch({
      type: CREATE_CHECKOUT_SESSION,
      payload: res.data
    });

    dispatch(setAlert('Checkout session created', 'success'));
  } catch (err) {
    dispatch({
      type: STRIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const createPaymentIntent = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await api.post('/stripe/create-payment-intent', formData, config);

    dispatch({
      type: CREATE_PAYMENT_INTENT,
      payload: res.data
    });

    dispatch(setAlert('Checkout session created', 'success'));
  } catch (err) {
    dispatch({
      type: STRIPE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};