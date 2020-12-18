import api from '../utils/api';
import {
  NODEMAILER_ERROR,
  SEND_MAIL
} from './types';

export const postReq = (formData) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      try {
        const res = await api.post('/contact/send', formData, config);
    
        dispatch({
          type: SEND_MAIL,
          payload: res.data
        });
    
        /* dispatch(setAlert('success, message sent')); */
      } catch (err) {
        dispatch({
          type: NODEMAILER_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    };
