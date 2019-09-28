import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Dimmer, Input } from 'semantic-ui-react';
import { authenticate, restoreSession } from '../../actions/auth';
import { getAuthStatus } from '../../selectors/auth';
import Status from '../../constants/status';
import { toast } from 'react-toastify';

class AuthPage extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.submitIfEnter = this.submitIfEnter.bind(this);
    this.state = {
      isLoading: false,
      value: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.restoreSession();
  }

  componentWillReceiveProps(newProps) {
    // In case authentication failed, show a notification
    if (newProps.status === Status.FAILED) {
      this.setState({ isLoading: false });
      toast.error('Failed to authenticate. Are you sure the passphrase you entered is correct?', {
        position: 'top-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  submitIfEnter(e) {
    if (e.keyCode === 13) {
      this.submit();
    }
  }

  submit() {
    const { isLoading, value } = this.state;
    this.setState({ isLoading: !isLoading });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.authenticate(value);
  }

  render() {
    const { isLoading } = this.state;
    const { status, location } = this.props;

    if (status === Status.SUCCESS) {
      return <Redirect to={location.from || '/'} />;
    }

    return (
      <Dimmer active>
        <Input
          action={{
            color: 'teal',
            labelPosition: 'right',
            icon: 'arrow circle right',
            content: 'Submit',
            loading: isLoading,
            onClick: this.submit,
          }}
          type="password"
          placeholder="Pass Phrase"
          onChange={e => this.setState({ value: e.target.value })}
          onKeyUp={this.submitIfEnter}
          autoFocus
        />
      </Dimmer>
    );
  }
}

AuthPage.defaultProps = {
  status: null,
  location: {},
};

AuthPage.propTypes = {
  status: PropTypes.string,
  location: PropTypes.object,
  authenticate: PropTypes.func.isRequired,
  restoreSession: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: getAuthStatus(state),
});

const mapDispatchToProps = dispatch => ({
  authenticate: value => dispatch(authenticate(value)),
  restoreSession: () => dispatch(restoreSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
