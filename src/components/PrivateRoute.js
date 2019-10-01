import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Status from '../constants/status';
import { getAuthStatus } from '../selectors/auth';

class PrivateRoute extends PureComponent {
  render() {
    const { status, component, location, ...props } = this.props;

    if (status !== Status.SUCCESS) {
      return <Redirect to={{ pathname: '/auth', from: location }} />;
    }

    return <Route component={component} {...props} />;
  }
}

PrivateRoute.defaultProps = {
  status: null,
};

PrivateRoute.propTypes = {
  status: PropTypes.string,
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  status: getAuthStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
