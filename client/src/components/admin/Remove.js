import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import TableRow from './TableRow';

import { connect } from 'react-redux';
import { /* deleteProduct,  */getProducts } from '../../actions/shop';

const Remove = ({ /* deleteProduct,  */getProducts, shop: { products } }) => {
    const [item, setItem] = useState('');

    useEffect(() => {
        getProducts();
    })
    
/*     const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.key);
        //deleteProduct(e.target.key);
    } */


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
            <TableRow key={product._id} product={product}/>
          ))}
        </tbody>
      </table>
  );
};

Remove.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  //getProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    shop: state.shop
})

export default connect(mapStateToProps, { /* deleteProduct, */ getProducts })(Remove);
