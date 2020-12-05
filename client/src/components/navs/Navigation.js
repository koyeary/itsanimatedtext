import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from '../../actions/auth';
//import CheckoutForm from '../shop/stripe/CheckoutForm';

const Navigation = ({ auth: { isAuthenticated }, logout }) => {
  const cart = <i className='fa fa-shopping-cart' aria-hidden='true' />;

  const logOut = (
    <span className='justify-content-end'>
      <i className='fas fa-user-minus' aria-hidden='true' />
    </span>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Item>
        <Nav.Link>
          <Link to='/contact'>Request a gif</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to='/contact'>Submit a Post</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
         {/*  <CheckoutForm /> */}
          <Link to='/cart'>{cart}</Link> 
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Nav.Item>
        <Nav.Link>
          <Link to='/makepost'>Post</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to='/admin'>Dashboard</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <a onClick={logout} href='#!'>
            Logout Admin {logOut}
          </a>
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  return (
    <Navbar className='bg-light justify-content-center sticky-top'>
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link to='/shop'>Shop</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/blog'>Blog</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Link>
          <Link to='/about'>About</Link>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link>
            <Link to='/faq'>FAQ</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/blog'>Wallpapers</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav>{isAuthenticated ? authLinks : guestLinks}</Nav>
    </Navbar>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigation);
