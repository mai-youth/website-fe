import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { Confirm } from 'semantic-ui-react';

class ConfirmDialog extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.state = { isOpen: false };
  }

  onConfirm() {
    const { onConfirm } = this.props;
    onConfirm();
    this.toggleDialog();
  }

  toggleDialog() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        {React.cloneElement(children, { onClick: this.toggleDialog })}
        <Confirm
          open={isOpen}
          onCancel={this.toggleDialog}
          onConfirm={this.onConfirm}
        />
      </>
    );
  }
}

ConfirmDialog.propTypes = {
  children: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmDialog;
