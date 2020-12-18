import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { postReq } from '../../actions/contact';

const ContactForm = ({ postReq }) => {
  const initialState = {
    name: '',
    email: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialState);

  const { name, email, message } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    postReq(formData);
    console.log(formData);
   // setFormData(initialState);
  };
  return (
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
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="email"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          className="form-control-lg"
          name="message"
          value={message}
          onChange={onChange}
          placeholder="message"
          rows={5}
        />
      </Form.Group>
      <Button variant="primary" className="mx-3" onSubmit={onSubmit} type="submit">
            Submit
          </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  postReq: PropTypes.func.isRequired
};

export default connect(null, { postReq })(ContactForm);
