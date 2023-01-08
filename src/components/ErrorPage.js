import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Errors from '../constants/errors';
import Header from './home/Header';
import Footer from './home/Footer';
import ErrorMessage from './ErrorMessage';

export default function ErrorPage({ errorCode }) {
  const errorDetails = Errors[errorCode];

  return (
    <Fragment>
      <Header />
      <ErrorMessage {...errorDetails} />
      <Footer />
    </Fragment>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.number.isRequired,
};
