import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import shop from './shop';
import images from './images';

export default combineReducers({
     alert,
     auth,
     shop,
     images
});