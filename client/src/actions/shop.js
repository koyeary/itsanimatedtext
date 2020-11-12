import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_ERROR
} from './types';

// Get products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/shop');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add like
export const updateProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/shop/${id}`);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: { id: res.data }
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/shop/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });

    dispatch(setAlert('Product Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add product
export const addProduct = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.product('/api/shop', formData, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });

    dispatch(setAlert('Product Created', 'success'));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get product
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/shop/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


