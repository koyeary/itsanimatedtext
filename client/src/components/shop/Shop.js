import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap';

const Shop = () => {
    return (
      <Fragment>
        <Row>
        <Spinner animation="grow"/>
          <Col >
            <img src="//unsplash.it/300" alt="" />
          </Col>
          <Col >
            <img src="//unsplash.it/300" alt="" />
          </Col>
          <Col >
            <img src="//unsplash.it/300" alt="" />
          </Col>
          <Col >
            <img src="//unsplash.it/300" alt="" />
          </Col>
          <Col >
            <img src="//unsplash.it/300" alt="" />
          </Col>
          <Col >
            <img src="//unsplash.it/300" alt="" />
          </Col>
        </Row>
        </Fragment>

    );
}

export default Shop;