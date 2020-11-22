import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/shop';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Update = ({ updateProduct, product }) => {
  const initialState = {
    name: product.name,
    price: product.price,
    category: product.category,
    main_image: product.main_image,
    id: product._id
  };

  const [formData, setFormData] = useState(initialState);
  const [toggleInput, setToggleInput] = useState('');

  const { name, price, category } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <tr>
      <th scope='row'><Button><i class='far fa-edit' /></Button></th>
      <td>{product.name}</td>
      <td >{product.price}</td>
      <td >{product.category}</td>
    </tr>
  );
};

Update.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

export default connect(null, { updateProduct })(Update);
