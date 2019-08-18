import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'semantic-ui-react';
import logo from '../Assets/logo.png';

function Logo({ size }) {
  return <Image size={size} src={logo} circular />;
}

Logo.defaultProps = {
  size: 'mini',
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
