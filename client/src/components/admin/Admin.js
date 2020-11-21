import React, { Fragment, useState, useEffect }from 'react';
import ProductForm from '../shop/ProductForm';
import Remove from './Remove';
import Control from './Control';
import { Container, Row, Col } from 'react-bootstrap';


const Admin = () => {

  return (
      <Fragment>
    <Row>
    <h1 className="display-2 m-5 pl-5 admin-display">Dashboard</h1>
  </Row>
    <Container className="my-4">
      <Row>
          <Col>
          <Control/>
          </Col>
          <Col>
            <Remove/>
          {/* <ProductForm/> */}
          </Col>
      </Row>
    </Container>
    </Fragment>
  );
};

export default Admin;