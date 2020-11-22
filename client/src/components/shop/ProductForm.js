import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Spinner } from 'react-bootstrap';

import { Form, Button } from 'react-bootstrap';
import { addProduct } from '../../actions/shop';

const ProductForm = ({ addProduct }) => {
  const initialState = {
    name: '',
    price: '',
    category: '',
    main_image: ''
  };
  const [formData, setFormData] = useState(initialState);

  const { name, price, category, main_image } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
  };

  const showForm = (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          className='form-control-lg'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='Enter item name'
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>category</Form.Label>
        <Form.Control
          className='form-control-lg'
          name='category'
          value={category}
          onChange={onChange}
          placeholder='Ex: hat'
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          className='form-control-lg'
          name='price'
          value={price}
          onChange={onChange}
          placeholder='20.00'
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          className='form-control-lg'
          name='main_image'
          value={main_image}
          onChange={onChange}
          placeholder='Image File'
          required
        />
      </Form.Group>

      <Button variant='primary' onSubmit={onSubmit} type='submit'>
        Submit
      </Button>
    </Form>
  );

  return <Fragment>{showForm}</Fragment>;
};

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired
};

export default connect(null, { addProduct })(ProductForm);
