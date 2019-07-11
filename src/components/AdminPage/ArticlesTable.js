import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Header, Table, Button, Icon } from 'semantic-ui-react';
import { getArticles } from '../../actions/articles';

class ArticlesTable extends PureComponent {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getArticles();
  }

  renderRows() {
    const { articles } = this.props;

    if (!articles || articles.length === 0) {
      return null;
    }

    return articles.map(({ id, title, body, author }) => (
      <Table.Row key={id}>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{author}</Table.Cell>
        <Table.Cell>{`${body.slice(0, 25)}...`}</Table.Cell>
        <Table.Cell>
          <Button size="mini" icon>
            <Icon name="pencil" />
          </Button>
          <Button color="red" size="mini" icon>
            <Icon name="delete" />
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  }

  render() {
    return (
      <Segment position="center">
        <Header className="ArticlesHeader">
          Articles
        </Header>
        <Button className="NewArticleButton" fixed="right">New Article</Button>
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
            {this.renderRows()}
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
