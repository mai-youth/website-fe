import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Table, Button } from 'semantic-ui-react';
import NewArticleModal from './NewArticleModal';
import { editArticle } from '../../actions/articles';

class ArticleTableRows extends PureComponent {
  render() {
    // eslint-disable-next-line no-shadow
    const { articles, editArticle } = this.props;

    if (!articles || articles.length === 0) {
      return null;
    }

    return articles.map(({ id, title, body, author }) => (
      <Table.Row key={id}>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{author}</Table.Cell>
        <Table.Cell>{`${body.slice(0, 25)}...`}</Table.Cell>
        <Table.Cell>
          <NewArticleModal
            onSubmit={updated => editArticle({ id, title, body, author }, updated)}
            modalTitle="Edit Article"
            defaultValues={{ title, body, author }}
            trigger={<Button size="mini" icon="pencil" />}
          />
          <Button color="red" size="mini" icon="delete" />
        </Table.Cell>
      </Table.Row>
    ));
  }
}

ArticleTableRows.propTypes = {
  articles: PropTypes.array.isRequired,
  editArticle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  editArticle: (old, updated) => dispatch(editArticle(old, updated)),
});

export default connect(null, mapDispatchToProps)(ArticleTableRows);
