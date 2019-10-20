import React from 'react';

class ToggleArticleState extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      published: false,
      value: 'Published',
    };
  }

  toggleArticleState() {
    // eslint-disable-next-line no-unused-vars
    const { value } = this.state;
    const { published } = this.state;
    this.setState({ published: !published });
    this.setState({ value: 'Draft' });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <button value={value} onClick={this.toggleArticleState} />
      </div>
    );
  }
}

export default ToggleArticleState;
