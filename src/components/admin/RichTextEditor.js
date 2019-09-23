import React from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';

export default class MyEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue(),
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      this.setState({ value: RichTextEditor.createValueFromString(defaultValue, 'html') });
    }
  }

  onChange(value) {
    const { onChange } = this.props;
    this.setState({ value });
    onChange(value.toString('html'));
  }

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;
    return (
      <RichTextEditor
        value={value}
        onChange={this.onChange}
        placeholder={placeholder}
      />
    );
  }
}

MyEditor.defaultProps = {
  defaultValue: null,
  placeholder: null,
};

MyEditor.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
