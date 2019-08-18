import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';
import { getArticles } from '../../actions/articles';
import logo from '../../Assets/placeholder.jpg';

class ArticlesLayout extends PureComponent {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="articles-container">
        <Card.Group itemsPerRow={3} centered doubling>
          {articles.map(({ id, title, body, author }) => (
            <Card
              key={id}
              image={logo}
              header={title}
              meta="July 2019"
              description={`${body.slice(0, 50)}...`}
              extra={(
                <span>
                  <Icon name="user" />
                  {author}
                </span>
              )}
              href={`/articles/${id}`}
              raised
            />
          ))}
        </Card.Group>
      </div>
    );
  }
}

ArticlesLayout.defaultProps = {
  articles: [],
};

ArticlesLayout.propTypes = {
  articles: PropTypes.array,
  getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesLayout);
