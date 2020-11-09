import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import { logout } from '../../actions/auth';

const Navigation = ({ auth: { isAuthenticated }, logout }) => {
  
  const cart = <FontAwesomeIcon icon={faShoppingCart} />;

  const authLinks = (
    <Fragment>
      <Nav>
        <Nav.Link>
          <Link to="/">Make Post</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/">Edit Shop</Link>
        </Nav.Link>
      </Nav>
      <Nav className="align-right">
        <Nav.Link>
          <a onClick={logout} href="#!">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout Admin</span>
          </a>
        </Nav.Link>
      </Nav>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav className="align-left">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/blog">Blog</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/shop">Shop</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/contact">Contact</Link>
        </Nav.Link>
      </Nav>
      <Nav className="align-right">
        <Nav.Link>
          <Link to="/cart">{cart}</Link>
        </Nav.Link>
      </Nav>
    </Fragment>
  );

  return (
    <Navbar>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
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
