/* import api from './api';

const setCheckoutToken = sessionId => {
  if (sessionId) {
    api.defaults.headers.common['sessionId'] = sessionId;
    localStorage.setItem('sessionId', sessionId);
  } else {
    delete api.defaults.headers.common['sessionId'];
    localStorage.removeItem('sessionId');
  }
};

export default setCheckoutToken; */