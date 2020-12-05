import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Routes from './components/routing/Routes';
import Shop from './components/shop/Shop';
import Navigation from './components/navs/Navigation';
import Header from './components/navs/Header';
//import CheckoutForm from './components/shop/stripe/CheckoutForm';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { LOGOUT } from './actions/types';

const stripePromise = loadStripe(
  'pk_test_51H5LHsBHBGQzSzD9juY9SuEcN29aSPSDtI2pIosRPM9WPqcYi6ZmonFYAzXhUC9ybfRWEp5OTQcnUa7M9FaFYLOQ00jfZYwGrA'
);

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Elements stripe={stripePromise}>
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Navigation />
          <Switch>
            <Route exact path='/' component={Shop} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
    </Elements>
  );
};

export default App;
