import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const New = ({ auth: { isAuthenticated }, logout }) => {
  const showErr = (
    <Fragment>No no no! You are not authorized to use this feature.</Fragment>
  );

  const showForm = (
    <Form>
        
    </Form>
  );

  return <Fragment>{isAuthenticated ? showForm : showErr}</Fragment>;
};

New.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(New);
