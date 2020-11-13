/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_PRODUCT,
/*     GET_PRODUCT,
    GET_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT, */
    PRODUCT_ERROR
  } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  product: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
/*     case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      }; */
    case ADD_PRODUCT:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
   /*  case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
        loading: false
      }; */
    case PRODUCT_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        product: null
      };
    /* case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === payload.id ? { ...product, products: payload.products } : product
        ),
        loading: false
      }; */
    default:
      return state;
  }
}
