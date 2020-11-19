import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const ShopHeader = ({ auth: { isAuthenticated }, logout }) => {
  const cart = <i className='fa fa-shopping-cart' aria-hidden='true' />;

  return (
    <Fragment>
      <Navbar>
        <Nav.Item>
          <Nav.Link>
            <Link to='/all'>All</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/caps'>Caps</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/best-sellers'>Best Sellers</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/shirts'>Shirts</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/stickers'>Stickers</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/posters'>Posters</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/holiday'>Holiday Caps</Link>
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </Fragment>
  );
};

export default ShopHeader;
