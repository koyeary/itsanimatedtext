import React, { Fragment } from 'react';
import Overlay from './Overlay';
import { Card, Col } from 'react-bootstrap';

const Product = ({ product }) => {
  const imgFile = `./img/shop_images/${product.main_image}`;
  return (
    <Fragment>
      <Col>
        <Card
          className='mx-1 my-4 shop-item'
          key={product._id}
          style={{ border: 'none' }}
        >
          <img
            variant='top'
            src={imgFile}
            alt={product.name}
            className='image'
          />
          <Overlay product={product} image={imgFile}/>
          <Card.Footer className='text-center'>
            {product.name}
            <br />
            {product.price}
          </Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Product;
