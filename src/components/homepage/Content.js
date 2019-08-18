import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

export default function Content({ title, body, color, borderless }) {
  const classes = classNames('content-container', { border: !borderless });

  return (
    <div className={classes} style={{ backgroundColor: color }}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

Content.defaultProps = {
  color: 'white',
  borderless: true,
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  color: PropTypes.string,
  borderless: PropTypes.bool,
};
