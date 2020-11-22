import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  GET_PRODUCT
} from './types';

// Get products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await api.get('/shop');

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

// Update product
export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/shop/admin/${id}`, formData);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: { id, product: res.data }
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.delete(`/shop/admin/${id}`);

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

// Add
export const addProduct = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await api.post('/shop/admin', formData, config);

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

// Get
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/shop/${id}`);

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
