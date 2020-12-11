/* eslint-disable import/no-anonymous-default-export */
import {
  STRIPE_ERROR,
  CREATE_PAYMENT_INTENT,
  CREATE_CHECKOUT_SESSION,
  GET_CHECKOUT_SESSION_ID
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
    case GET_CHECKOUT_SESSION_ID:
      return {
        ...state,
        id: payload,
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
