import React from 'react';

class ToggleArticleState extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      published: false,
      value: 'Publish',
    };
  }

  toggleArticleState() {
    // eslint-disable-next-line no-unused-vars
    const { published } = this.state;
    this.setState({ published: !published });
    this.setState({ value: 'Unpublish' });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <button type="submit" value={value} onClick={this.toggleArticleState} />
      </div>
    );
  }
}

export default ToggleArticleState;
