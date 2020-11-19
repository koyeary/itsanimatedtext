import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import { getProducts } from '../../actions/shop';

import { Row } from 'react-bootstrap';

const Shop = ({ getProducts, shop: { products } }) => {
  useEffect(() => {
    getProducts();
  });

  return (
    <Row>
      <h1>shop</h1>
      {products.map((product) => (
        <Fragment>
          <Product key={product._id} product={product} />
        </Fragment>
      ))}
    </Row>
  );
};

Shop.propTypes = {
  getProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  shop: state.shop
});

export default connect(mapStateToProps, { getProducts })(Shop);
