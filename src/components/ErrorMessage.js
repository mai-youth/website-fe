import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from 'semantic-ui-react';
import Errors from '../constants/errors';
import Header from './home/Header';
import Footer from './home/Footer';

export default function ErrorMessage({ errorCode }) {
  const { title, body, icon, color } = Errors[errorCode];

  return (
    <Fragment>
      <Header />
      <div className="error-page-content">
        <div className="message-container">
          <div className="msg-flex-item">
            <Icon name={icon} color={color} size="huge" />
          </div>
          <div className="msg-flex-item" style={{ marginLeft: '35px' }}>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

ErrorMessage.propTypes = {
  errorCode: PropTypes.number.isRequired,
};
