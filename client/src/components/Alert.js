import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Toast } from 'react-bootstrap';

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <Toast>
      <Toast.Header>Something Cheeky</Toast.Header>
      <Toast.Body>
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      </Toast.Body>
    </Toast>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
