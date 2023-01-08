import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from 'semantic-ui-react';

export default function ErrorMessage({ title, body, icon, color }) {
  return (
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
  );
}

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
};

ErrorMessage.defaultProps = {
  icon: 'exclamation circle',
  color: 'black',
};
