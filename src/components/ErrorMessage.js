import React from 'react';
import { PropTypes } from 'prop-types';
import Errors from '../constants/errors';

export default function ErrorMessage({ errorCode }) {
  const { title, body } = Errors[errorCode];

  return (
    <div>
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
}

ErrorMessage.propTypes = {
  errorCode: PropTypes.number.isRequired,
};
