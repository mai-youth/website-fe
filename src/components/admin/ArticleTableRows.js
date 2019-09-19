import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Table, Button } from 'semantic-ui-react';
import ArticleFormModal from './ArticleFormModal';
import ConfirmDialog from './ConfirmDialog';
import { editArticle, deleteArticle } from '../../actions/articles';
import { stripTags } from '../../utils/stringUtils';

class ArticleTableRows extends PureComponent {
  render() {
    const { articles, editArticle, deleteArticle } = this.props;

    if (!articles || articles.length === 0) {
      return null;
    }

    return articles.map(({ id, title, body, author }) => (
      <Table.Row key={id}>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{author}</Table.Cell>
        <Table.Cell>{`${stripTags(body).slice(0, 25)}...`}</Table.Cell>
        <Table.Cell>
          <ArticleFormModal
            onSubmit={updated => editArticle({ id, title, body, author }, updated)}
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
});

export default connect(null, mapDispatchToProps)(ArticleTableRows);
