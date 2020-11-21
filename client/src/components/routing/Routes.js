import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';
import Shop from '../shop/Shop';
import Blog from '../blog/Blog';
import Admin from '../admin/Admin';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Details from '../shop/pages/Details';
//import Caps from '../shop/pages/Caps';
//import Bestsellers from '../shop/pages/Bestsellers';
//import Shirts from '../shop/pages/Shirts';
//import Stickers from '../shop/pages/Stickers';
//import Posters from '../shop/pages/Posters';
//import Holiday from '../shop/pages/Holiday';
//import Cart from '../shop/Cart';
//import MakePost from '../blog/MakePost';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
      <Route exact path='/' component={Shop} />
        <Route path='/blog' component={Blog} />
        <Route path='/shop' component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />
        <Route path='/private/login' component={Login} />
        <Route path='/details' component={Details} /> 
        <PrivateRoute exact path='/admin' component={Admin} />
        {/* <Route path='/caps' component={Caps} />
        <Route path='/bestsellers' component={Bestsellers} />
        <Route path='/shirts' component={Shirts} />
        <Route path='/stickers' component={Stickers} />
        <Route path='/posters' component={Posters} />
        <Route path='/holiday' component={Holiday} />
       <Route exact path='/cart' component={Cart} />    */}
      </Switch>
    </Fragment>
  );
};

export default Routes;
