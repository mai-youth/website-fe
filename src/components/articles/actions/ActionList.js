import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, Button, Popup, Input } from 'semantic-ui-react';
import { copyToClipboard } from '../../../utils/clipboard';

export default class ActionList extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.state = {
      liked: false,
      interactedWithLike: false,
    };
  }

  toggleLike() {
    const { liked, interactedWithLike } = this.state;
    const { onLiked } = this.props;
    this.setState({ liked: !liked });

    // We only want to like the article once so unliking and liking again does not count as 2 likes
    // This is mainly because we have no way of "unliking" an article at the moment
    if (!interactedWithLike) {
      this.setState({ interactedWithLike: true });
      onLiked();
    }
  }

  render() {
    const { liked } = this.state;

    return (
      <List className="action-list" verticalAlign="middle">
        <List.Item className="action-item">
          <Popup
            trigger={<Button circular color="green" icon="share alternate" onClick={() => copyToClipboard('share-text')} />}
            position="right center"
            basic
            inverted
          >
            <Input id="share-text" value={window.location.href} readOnly style={{ width: '250px' }} />
          </Popup>
        </List.Item>
        <List.Item>
          <Button circular color={liked ? 'pink' : 'teal'} icon="like" onClick={this.toggleLike} />
        </List.Item>
      </List>
    );
  }
}

ActionList.defaultProps = {
  onLiked: () => {}, // Do nothing
};

ActionList.propTypes = {
  onLiked: PropTypes.func,
};
