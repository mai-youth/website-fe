import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Header, Table, Button } from 'semantic-ui-react';
import { getArticles } from '../../actions/articles';
import ArticleTableRows from './ArticleTableRows';
import NewArticleModal from './NewArticleModal';

class ArticlesTable extends PureComponent {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <Segment position="center">
        <Header className="ArticlesHeader">
                    Articles
        </Header>
        <NewArticleModal trigger={<Button className="NewArticleButton" fixed="right">New Article</Button>} />
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Article Name</Table.HeaderCell>
              <Table.HeaderCell>Author</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell width={2}> Actions </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <ArticleTableRows articles={articles} />
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

ArticlesTable.defaultProps = {
  articles: [],
};

ArticlesTable.propTypes = {
  articles: PropTypes.array,
  getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesTable);
