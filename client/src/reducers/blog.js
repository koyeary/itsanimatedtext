/* /* eslint-disable import/no-anonymous-default-export 
import { SET_POST, DELETE_POST } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_POST:
      return [...state, payload];
    case DELETE_POST:
      return console.log('deleted');
    default:
      return state;
  }
}
 */