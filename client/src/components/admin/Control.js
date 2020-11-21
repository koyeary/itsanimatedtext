import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Control = () => {
const [showForm, setShowForm] = useState('');

    const handleShowForm = (e) => {
        e.preventDefault();
        let form = e.target.value;
        setShowForm(form);
        if (showForm === form) {
            
        }
    }

  return (
    <ButtonGroup className='btn-group-vertical mt-5 pt-5'>
      <Button className='my-3' value='add'>
        <i class='fas fa-plus' /> add new item to storefront
      </Button>
      <Button className='my-3' value='remove'>
        <i class='fas fa-minus' /> remove item from storefront
      </Button>
      <Button className='my-3' value='update'>
        <i class='far fa-edit' /> update item from storefront
      </Button>
    </ButtonGroup>
  );
};

export default Control;
