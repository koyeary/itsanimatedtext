import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/shop';
import { Form, Button, Image } from 'react-bootstrap';

const Update = ({ updateProduct, product }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
    image: product.main_image
  });

  const { name, price, category, image } = formData;

  const handleSave = (e) => {
    e.preventDefault();

    alert(`Would you like to update item ${product._id}, ${formData.name}?`);
    console.log(name, price, category, image);
    updateProduct(product._id, formData);
    setEditMode(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <tr>
      <th scope='row'>
        {editMode ? (
          <Button
            data-toggle='button'
            onClick={(e) => handleSave(e)}
            type='submit'
          >
            <i class='far fa-save' />
          </Button>
        ) : (
          <Button>
            <i class='far fa-edit' onClick={(e) => handleEdit(e)} />
          </Button>
        )}
      </th>
      <td>
        {editMode ? (
          <Form.Control name='name' value={name} onChange={onChange} />
        ) : (
          `${name}`
        )}
      </td>
      <td>
        {editMode ? (
          <Form.Control name='category' value={category} onChange={onChange} />
        ) : (
          `${category}`
        )}
      </td>
      <td>
        {editMode ? (
          <Form.Control name='price' value={price} onChange={onChange} />
        ) : (
          `$${price}.00`
        )}
      </td>
      <td>
        {editMode ? (
          <Form.Control name='image' value={image} onChange={onChange} />
        ) : (
          `${image}`
        )}
      </td>
    </tr>
  );
};

Update.propTypes = {
  updateProduct: PropTypes.func.isRequired
};

export default connect(null, { updateProduct })(Update);
