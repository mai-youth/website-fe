import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {Table, Button, Checkbox} from 'semantic-ui-react';
import ArticleFormModal from './ArticleFormModal';
import ConfirmDialog from './ConfirmDialog';
import {editArticle, deleteArticle, publishArticle, unpublishArticle} from '../../actions/articles';
import {stripTags} from '../../utils/stringUtils';
import ToggleArticleState from './ToggleArticleState';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.toDateString()} @ ${date.toTimeString().slice(0, 5)}`;
};

class ArticleTableRows extends PureComponent {
  constructor(props) {
    super(props);
    this.togglePublish = this.togglePublish.bind(this);
  }

  togglePublish(e, {checked}, id) {
    // eslint-disable-next-line no-shadow
    const {editArticle} = this.props;
    if (checked) {
      publishArticle(id);
    } else if (!checked) {
      unpublishArticle(id);
    }
    editArticle({published: checked});
  }

  render() {
    const {articles, editArticle, deleteArticle} = this.props;

    if (!articles || articles.length === 0) {
      return null;
    }

    return articles.map(({id, title, body, author, views, likes, createdAt, updatedAt, published = true}) => (
      <Table.Row key={id}>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{author}</Table.Cell>
        <Table.Cell>{`${stripTags(body).slice(0, 25)}...`}</Table.Cell>
        <Table.Cell>{views}</Table.Cell>
        <Table.Cell>{likes}</Table.Cell>
        <Table.Cell>{formatDate(createdAt)}</Table.Cell>
        <Table.Cell>{formatDate(updatedAt)}</Table.Cell>
        <Table.Cell>
          <Checkbox toggle defaultChecked={published} onChange={this.togglePublish(id)}/>
        </Table.Cell>
        <Table.Cell>
          <ArticleFormModal
            onSubmit={updated => editArticle({id, title, body, author}, updated)}
            modalTitle="Edit Article"
            defaultValues={{title, body, author}}
            trigger={<Button size="mini" icon="pencil"/>}
          />
          <ConfirmDialog onConfirm={() => deleteArticle(id)}>
            <Button
              color="red"
              size="mini"
              icon="delete"
            />
          </ConfirmDialog>
          <ToggleArticleState/>
        </Table.Cell>
      </Table.Row>
    ));
  }
}

ArticleTableRows.propTypes = {
  articles: PropTypes.array.isRequired,
  editArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  editArticle: (old, updated) => dispatch(editArticle(old, updated)),
  deleteArticle: id => dispatch(deleteArticle(id)),
  publishArticle: id => dispatch(publishArticle(id)),
  unpublishArticle: id => dispatch(unpublishArticle(id)),
});

export default connect(null, mapDispatchToProps)(ArticleTableRows);
