import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from '../../actions/auth';
import Cart from '../shop/pages/Cart';

const Navigation = ({ auth: { isAuthenticated }, logout }) => {
  const cart = <i className='fa fa-shopping-cart' aria-hidden='true' />;

  const logOut = (
    <Fragment>
      <i className='fas fa-user-minus' aria-hidden='true' />
    </Fragment>
  );

  const checkout = (
    <Fragment>
      <Nav.Item>
        <Nav.Link>
          <Link to='/cart'>{cart}</Link>
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Nav.Item>
        <Nav.Link>
          <Link to='/makepost'>Make Post</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to='/shop/edit'>Edit Shop</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <a onClick={logout} href='#!'>
            {logOut}
          </a>
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  return (
    <Navbar className='bg-light justify-content-end sticky-top'>
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Link>
          <Link to='/blog'>Blog</Link>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link>
            <Link to='/shop'>Shop</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Link>
          <Link to='/about'>About</Link>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link>
            <Link to='/contact'>Contact</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav>{isAuthenticated ? authLinks : checkout}</Nav>
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
