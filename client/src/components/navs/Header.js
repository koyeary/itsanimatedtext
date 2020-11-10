import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';

import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Header = ({ auth: { isAuthenticated }, logout }) => {
  
    const showHeader = (
      <Jumbotron>
        <h1>It's Animated Text</h1>
      </Jumbotron>
    );

  const showDashboard = ( <Fragment></Fragment>);

  return <Fragment>{isAuthenticated ? showDashboard : showHeader}</Fragment>;
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
