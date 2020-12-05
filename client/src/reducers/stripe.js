/* eslint-disable import/no-anonymous-default-export */
import {
  STRIPE_ERROR,
  CREATE_PAYMENT_INTENT,
  CREATE_CHECKOUT_SESSION
} from '../actions/types';

const initialState = {
  products: [],
  product: null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CHECKOUT_SESSION:
      return {
        ...state,
        product: payload,
        loading: false
      };
    case CREATE_PAYMENT_INTENT:
      return {
        ...state,
        product: payload,
        loading: false
      };
      case STRIPE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
    default:
      return state;
  }
}
