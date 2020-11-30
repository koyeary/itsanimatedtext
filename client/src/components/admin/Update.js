import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/shop';
import TableForm from './TableForm';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Update = ({ updateProduct, product }) => {
  const [toggleInput, setToggleInput] = useState(false);
  //const [toggleForm, setToggleForm] = useState(false);

  const handleClick = (e) => {
    const id = product._id;

    e.preventDefault();
    console.log(id);
    toggleInput ? setToggleInput(false) : setToggleInput(true);
  };

  return (
    <tr>
      <th scope='row'><Button data-toggle='button' onClick={handleClick}>
          {toggleInput ?   (<i class='far fa-save' />
        ) : (
            <i class='far fa-edit' />)}
          </Button></th>
      <td>{product.name}</td>
      <td>${product.price}.00</td>
      <td>{product.category}</td>
    </tr>
  );

  /* return (
    
    <tr>
      <th scope='row'>
        
          <Button data-toggle='button'>
          {toggleInput ?   (<i class='far fa-save' />
        ) : (
            <i class='far fa-edit' />)}
          </Button>
        
      </th>
      <td name='name' onClick={setToggleForm(true)}>
        {toggleForm ? (<TableForm product={product} />) : (product.name)}
      </td>
      <td name='price' onClick={setToggleForm(true)}>
        {toggleForm ? (<TableForm product={product} />) : (product.price)}
      </td>
      <td name='category' onClick={setToggleForm(true)}>
        {toggleForm ? (<TableForm product={product} />) : (product.category)}
      </td>
    </tr>
  ); */
};

Update.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

export default connect(null, { updateProduct })(Update);
