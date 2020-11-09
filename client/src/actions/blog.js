/* import api from '../utils/api';
import { SET_POST } from './types';

export const setPost = () => async (dispatch) => {
  try {
    const res = await api.get('/blog');

    dispatch({
      type: SET_POST,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.error(errors);
  }
};
 */