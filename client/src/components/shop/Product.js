import React, { Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ( { product } ) => {

  return (
    <Fragment>
      <Col>
      <Card className="mx-1 my-4" key={product._id} style={{border:'none'}}>
        <img variant='top' src={product.url} alt={product.name}/>
        <Card.Body>
          <Card.Text>
            {product.name} /{' '} 
            {`$${product.price}.00`}<br/>
            {product.description}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Fragment>
  );
};



export default Product;

