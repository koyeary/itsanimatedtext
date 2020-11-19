import React from 'react';
import ProductForm from '../shop/ProductForm';
import { Container, Row, Col } from 'react-bootstrap';

const Admin = () => {
  return (
    <Container className="m-5">
      <Row>
        <h1 className="display-2">Dashboard</h1>
      </Row>
      <Row className="py-3">
        <Col md={8}>

        </Col>
        <Col md={4}>
        <ProductForm/>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
