import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Spinner } from 'react-bootstrap';

import { Col, Form, Button } from 'react-bootstrap';
import { addProduct } from '../../actions/shop';

const AddProduct = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    image_src: '',
    price: '',
    description: ''
  });

  const { name, image_src, price, description } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(name, image_src, price, description);
  };


  const showForm = (
    <Form onSubmit={onSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control name='name'
            value={name}
            onChange={onChange}
            placeholder='Enter item name'
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Image</Form.Label>
          <Form.Control name='image_src'
            value={image_src}
            onChange={onChange}
            placeholder='Image File'
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control name='price' value={price} onChange={onChange} placeholder='20.00' 
        required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control name='description'
          value={description}
          onChange={onChange}
          placeholder='Ex: hat'
        />
      </Form.Group>

      <Button variant='primary' onSubmit={onSubmit} type='submit'>
        Submit
      </Button>
    </Form>
  );

  return <Fragment>{showForm}</Fragment>;
};

 AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};


export default connect(null, { addProduct })(AddProduct); 
