import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';
import ConfirmDialog from './ConfirmDialog';
import { deleteArticle } from '../../actions/articles';

function ArticleTableRows({ articles, deleteArticle }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return articles.map(({ id, title, body, author }) => (
    <Table.Row key={id}>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{author}</Table.Cell>
      <Table.Cell>{`${body.slice(0, 25)}...`}</Table.Cell>
      <Table.Cell>
        <Button size="mini" icon="pencil" />
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

ArticleTableRows.defaultProps = {
  articles: [],
};

ArticleTableRows.propTypes = {
  articles: PropTypes.array,
  deleteArticle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteArticle: id => dispatch(deleteArticle(id)),
});

export default connect(null, mapDispatchToProps)(ArticleTableRows);
