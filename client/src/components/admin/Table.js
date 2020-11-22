import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import Delete from './Delete';
import Update from './Update';

import { connect } from 'react-redux';
import { getProducts } from '../../actions/shop';

const Table = ({ getProducts, shop: { products } }) => {

    useEffect(() => {
        getProducts();
    })
    

  return (
      <table className='table table-hover table-wrapper table-scrollbar shadow'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Category</th>
          </tr>
        </thead>

        <tbody>
        {products.map((product) => (
             <Delete key={product._id} product={product}/> 
            /*  <Update key={product._id} product={product}/>  */
          ))}
        </tbody>
      </table>
  );
};

Table.propTypes = {
  getProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    shop: state.shop
})

export default connect(mapStateToProps, { getProducts })(Table);
