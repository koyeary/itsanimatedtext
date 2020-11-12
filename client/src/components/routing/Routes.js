import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';
import Shop from '../shop/Shop';
import Blog from '../blog/Blog';
import Admin from '../auth/Admin';
import Register from '../auth/Register';
import Login from '../auth/Login';
import MakePost from '../blog/MakePost';
import AddProduct from '../shop/AddProduct';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />        
        <PrivateRoute exact path='/dashboard' component={Admin} />
        <PrivateRoute exact path='/shop/edit' component={AddProduct} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
