import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Table, Button, Checkbox } from 'semantic-ui-react';
import ArticleFormModal from './ArticleFormModal';
import ConfirmDialog from './ConfirmDialog';
import { editArticle, deleteArticle } from '../../actions/articles';
import { stripTags } from '../../utils/stringUtils';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.toDateString()} @ ${date.toTimeString().slice(0, 5)}`;
};

class ArticleTableRows extends PureComponent {
  constructor(props) {
    super(props);
    this.togglePublish = this.togglePublish.bind(this);
  }

  togglePublish(oldValues, { checked }) {
    // eslint-disable-next-line no-shadow
    const { editArticle } = this.props;
    // Booleans are stored as a tinyint on the sercer side (1 for true, 0 for false)
    editArticle(oldValues, { published: checked ? 1 : 0 });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { articles, editArticle, deleteArticle } = this.props;

    if (!articles || articles.length === 0) {
      return null;
    }

    return articles.map((article) => {
      const { id, title, body, author, views, likes, createdAt, updatedAt, published } = article;
      return (
        <Table.Row key={id}>
          <Table.Cell>{title}</Table.Cell>
          <Table.Cell>{author}</Table.Cell>
          <Table.Cell>{`${stripTags(body).slice(0, 25)}...`}</Table.Cell>
          <Table.Cell>{views}</Table.Cell>
          <Table.Cell>{likes}</Table.Cell>
          <Table.Cell>{formatDate(createdAt)}</Table.Cell>
          <Table.Cell>{formatDate(updatedAt)}</Table.Cell>
          <Table.Cell>
            <Checkbox
              toggle
              defaultChecked={published === 1}
              onChange={(e, data) => this.togglePublish(article, data)}
            />
          </Table.Cell>
          <Table.Cell>
            <ArticleFormModal
              onSubmit={updated => editArticle(article, updated)}
              modalTitle="Edit Article"
              defaultValues={{ title, body, author }}
              trigger={<Button size="mini" icon="pencil" />}
            />
            <ConfirmDialog onConfirm={() => deleteArticle(id)}>
              <Button
                color="red"
                size="mini"
                icon="delete"
              />
            </ConfirmDialog>
          </Table.Cell>
        </Table.Row>
      );
    });
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
});

export default connect(null, mapDispatchToProps)(ArticleTableRows);
