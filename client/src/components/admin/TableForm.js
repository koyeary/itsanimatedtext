import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProducts } from '../../actions/shop';

const TableForm = ({ product }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
    id: product._id
  });

  const { name, price, category, id } = formData;


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <td>
      <input name={product.name} />
    </td>
  );
};

export default TableForm;
