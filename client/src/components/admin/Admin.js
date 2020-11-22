import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import ProductForm from '../shop/ProductForm';
import Table from './Table';
import Control from './Control';
import Delete from './Delete';
import { Container, Button, ButtonGroup, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getProducts } from '../../actions/shop';

const Admin = ({ getProducts, shop: { products } }) => {
  const [radioValue, setRadioValue] = useState('1');

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
              <Button data-toggle="button"
                className="my-3"
                value="add"
                onClick={(e) => console.log("add")
                }
              >
                <i className="fas fa-plus pr-3" />
                add item
              </Button>
              <Button data-toggle="button"
                className="my-3"
                value="remove"
                onClick={(e) => console.log("remove")}
              >
                <i className="fas fa-minus pr-3" />
                delete item
              </Button>
              <Button data-toggle="button"
                className="my-3"
                value="update"
                onClick={(e) => console.log("update")}
              >
                <i className="far fa-edit pr-3" />
                update item
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            {/* <Table/> */}
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
                  <Delete key={product._id} product={product} />
                  /*  <Update key={product._id} product={product}/>  */
                  /*  <ProductForm>  */
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

Table.propTypes = {
  getProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  shop: state.shop
});

export default connect(mapStateToProps, { getProducts })(Admin);
