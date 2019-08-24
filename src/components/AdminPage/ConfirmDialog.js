import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button, Confirm } from 'semantic-ui-react';
import { deleteArticle } from '../../actions/articles';

class ConfirmDialog extends Component {
  constructor(props) {
    super(props);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.state = { isOpen: false };
  }

  deleteArticle() {
    const { id } = this.props;
    this.props.deleteArticle(id);
    this.toggleDialog();
  }

  toggleDialog() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.toggleDialog}
          color="red"
          size="mini"
          icon="delete"
        />
        <Confirm
          onCancel={this.toggleDialog}
          onConfirm={this.deleteArticle}
          trigger={<Button />}
        />
      </div>
    );
  }
}

ConfirmDialog.propTypes = {
  id: PropTypes.number.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteArticle: id => dispatch(deleteArticle(id)),
});

export default connect(null, mapDispatchToProps)(ConfirmDialog);
