/* eslint-disable import/no-anonymous-default-export */
import {
  GET_IMAGES,
  IMAGE_ERROR,
  UPDATE_IMAGE,
  DELETE_IMAGE,
  ADD_IMAGE,
  GET_IMAGE
} from '../actions/types';

const initialState = {
  images: [],
  image: null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_IMAGES:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case GET_IMAGE:
      return {
        ...state,
        product: payload,
        loading: false
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [payload, ...state.images],
        loading: false
      };
    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image._id !== payload),
        loading: false
      };
    case IMAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        images: state.images.map((image) =>
          image._id === payload.id ? { ...image, likes: payload.likes } : image
        ),
        loading: false
      };
    default:
      return state;
  }
}
