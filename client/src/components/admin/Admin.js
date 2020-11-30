import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import ProductForm from '../shop/ProductForm';
import Delete from './Delete';
import Update from './Update';
import { Container, Button, ButtonGroup, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getProducts } from '../../actions/shop';

const Admin = ({ getProducts, shop: { products } }) => {
  const [toggleTable, setToggleTable] = useState(false);

  useEffect(() => getProducts());

  return (
    <Fragment>
      <Row>
        <h1 className="display-2 m-5 pl-5 admin-display">Dashboard</h1>
      </Row>
      <Container className="my-4">
        <Row>
          <Col>
            <ButtonGroup className="btn-group-vertical mt-5 pt-5">
              <Button data-toggle="button" className="my-3" value="add">
                <i className="fas fa-plus pr-3" />
                add item
              </Button>
              <Button
                data-toggle="button"
                className="my-3"
                value="remove"
                onClick={(e) => setToggleTable(true)}
              >
                <i className="fas fa-minus pr-3" />
                delete item
              </Button>
              <Button
                data-toggle="button"
                className="my-3"
                value="update"
                onClick={(e) => setToggleTable(false)}
              >
                <i className="far fa-edit pr-3" />
                update item
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <table className="table table-hover table-wrapper table-scrollbar shadow">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <Fragment>
                     {toggleTable ? ( 
                      <Delete key={product._id} product={product} />
                     ) : (
                      <Update key={product._id} product={product} />
                    )} 
                  </Fragment>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

Admin.propTypes = {
  getProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  shop: state.shop
});

export default connect(mapStateToProps, { getProducts })(Admin);
