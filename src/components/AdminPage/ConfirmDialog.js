import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmDialog extends Component {
  constructor(props) {
    super(props);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.state = { isOpen: false };
  }

  deleteArticle() {
    const { id } = this.props;
    this.deleteArticle(id);
    this.toggleDialog();
  }

  toggleDialog() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Button
          onClick={this.toggleDialog}
          color="red"
          size="mini"
          icon="delete"
        />
        <Confirm
          open={isOpen}
          onCancel={this.toggleDialog}
          onConfirm={this.deleteArticle}
        />
      </div>
    );
  }
}

ConfirmDialog.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ConfirmDialog;
