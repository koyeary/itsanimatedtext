import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Spinner } from 'react-bootstrap';

import { Form, Button, Modal } from 'react-bootstrap';
import { addProduct } from '../../actions/shop';

const ProductForm = ({ addProduct }) => {
  const initialState = {
    name: '',
    price: '',
    category: '',
    main_image: ''
  };
  const [formData, setFormData] = useState(initialState);
  const [show, setShow] = useState(false);

  const { name, price, category, main_image } = formData;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    alert(`added ${name} to shop`);
    handleClose();
    setFormData(initialState);
  };

  const formBody = (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter item name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>category</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="category"
          value={category}
          onChange={onChange}
          placeholder="Ex: hat"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="price"
          value={price}
          onChange={onChange}
          placeholder="20.00"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="main_image"
          value={main_image}
          onChange={onChange}
          placeholder="Image File"
          required
        />
      </Form.Group>

      <div className="text-center">
          <Button variant="primary" className="mx-3" onSubmit={onSubmit} type="submit">
            Submit
          </Button>
          <Button variant="secondary" className="mx-3" onClick={handleClose}>
            Close
          </Button>
      </div>
    </Form>
  );

  return (
    <Fragment>
      <Button
        data-toggle="button"
        className="my-3"
        value="add"
        onClick={handleShow}
      >
        <i className="fas fa-plus pr-3" />
        add item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add shop item</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formBody}</Modal.Body>
      </Modal>
    </Fragment>
  );
};

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired
};

export default connect(null, { addProduct })(ProductForm);
