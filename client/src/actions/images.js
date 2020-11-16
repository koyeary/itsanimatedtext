import api from '../utils/api';
import {
    GET_IMAGES,
    GET_IMAGE,
    UPDATE_IMAGE,
    DELETE_IMAGE,
    ADD_IMAGE,
    IMAGE_ERROR
} from './types';


// Get all images
export const getImages = () => async dispatch => {
  try {
    const res = await api.get('/shop/images');

    dispatch({
      type: GET_IMAGES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get one image
export const getImage = id => async dispatch => {
    try {
      const res = await api.get(`/shop/images/${id}`);
  
      dispatch({
        type: GET_IMAGE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: IMAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  //Add image
  export const addImage = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await api.post('/shop/images', formData, config);
  
      dispatch({
        type: ADD_IMAGE,
        payload: res.data
      });

    } catch (err) {
      dispatch({
        type: IMAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  
  //Update image URL
  export const updateImage = id => async dispatch => {
      try {
          const res = await api.put(`api/shop/images/${id}`);

          dispatch({
              type: UPDATE_IMAGE,
              payload: { id, url: res.data }
          });
        } catch (err) {
            dispatch({
              type: IMAGE_ERROR,
              payload: { msg: err.response.statusText, status: err.response.status }
            });
          }
        };

// Delete image
export const deleteProduct = id => async dispatch => {
    try {
      await api.delete(`/shop/images/${id}`);
  
      dispatch({
        type: DELETE_IMAGE,
        payload: id
      });
  
    } catch (err) {
      dispatch({
        type: IMAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };