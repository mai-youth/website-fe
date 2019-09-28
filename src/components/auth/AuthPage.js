import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Dimmer, Input } from 'semantic-ui-react';
import { authenticate, restoreSession } from '../../actions/auth';
import { getAuthStatus } from '../../selectors/auth';
import Status from '../../constants/status';

class AuthPage extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      isLoading: false,
      value: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.restoreSession();
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
          placeholder="Pass Phrase"
          onChange={e => this.setState({ value: e.target.value })}
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
