import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about/About';
import Contact from '../about/Contact';
import Shop from '../shop/Shop';
import Blog from '../blog/Blog';
import Admin from '../auth/Admin';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <PrivateRoute exact path='/admin' component={Admin} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
