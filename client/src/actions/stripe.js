import api from '../utils/api';
import {
  STRIPE_ERROR,
  CREATE_CHECKOUT_SESSION
} from './types';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
  'pk_test_51H5LHsBHBGQzSzD9juY9SuEcN29aSPSDtI2pIosRPM9WPqcYi6ZmonFYAzXhUC9ybfRWEp5OTQcnUa7M9FaFYLOQ00jfZYwGrA'
);

export const createCheckoutSession = (checkoutData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await api.post(
      '/stripe/create-checkout-session',
      checkoutData,
      config
    );
    dispatch({
      type: CREATE_CHECKOUT_SESSION,
      payload: res.data.id
    });
    dispatch(redirectToCheckout(res.data.id));
  } catch (err) {
    dispatch({
      type: STRIPE_ERROR
    });
  }
};

export const redirectToCheckout = (id) => async (dispatch) => {
  const stripe = await stripePromise;
  const result = stripe.redirectToCheckout({ sessionId: id });

  if (result.error) {
    dispatch({
      type: STRIPE_ERROR
    });
  }
};
