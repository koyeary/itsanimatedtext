import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import shop from './shop';
import images from './images';
import stripe from './stripe';
import cart from './cart';

export default combineReducers({
     alert,
     auth,
     shop,
     images,
     stripe,
     cart
});