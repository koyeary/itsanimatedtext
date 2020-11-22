import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProduct } from '../../actions/shop';
import { Button } from 'react-bootstrap';

const Delete = ({ deleteProduct, product }) => {
  const handleClick = (e) => {
    const id = product._id;

    e.preventDefault();
    deleteProduct(id);
  };

  return (
    <tr>
      <th scope='row'><Button onClick={handleClick}><i class='fas fa-minus' /></Button></th>
      <td>{product.name}</td>
      <td>${product.price}.00</td>
      <td>{product.category}</td>
    </tr>
  );
};

Delete.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

export default connect(null, { deleteProduct })(Delete);
