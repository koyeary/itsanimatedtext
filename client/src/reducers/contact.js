/* eslint-disable import/no-anonymous-default-export */
import {
    NODEMAILER_ERROR,
    SEND_MAIL
  } from '../actions/types';
  
  const initialState = {
    formData: [],
    error: {}
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SEND_MAIL:
        return {
          ...state,
          id: payload,
          loading: false
        };
        case NODEMAILER_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          };
      default:
        return state;
    }
  }
  