import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProduct } from '../../actions/shop';

const TableRow = ({ deleteProduct, product }) => {

    const handleClick = (e) => {
        const id = product._id;
        
        e.preventDefault();
        deleteProduct(id);
    }

  return (
    <tr onClick={handleClick}>
      <th scope='row'></th>
      <td>{product.name}</td>
      <td>${product.price}.00</td>
      <td>{product.category}</td>
    </tr>
  );
};

TableRow.propTypes = {
    deleteProduct: PropTypes.func.isRequired,
    //getProducts: PropTypes.func.isRequired,
    shop: PropTypes.object.isRequired
  };
  
  
  export default connect(null, { deleteProduct })(TableRow);
