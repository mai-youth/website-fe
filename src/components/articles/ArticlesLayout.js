import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';
import { getArticles } from '../../actions/articles';
import { getArticlesFromState } from '../../selectors/articles';
import logo from '../../assets/placeholder.jpg';
import { stripTags } from '../../utils/stringUtils';
import { getYearMonthFromDate } from '../../utils/date';
import ErrorMessage from '../ErrorMessage';

class ArticlesLayout extends PureComponent {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getArticles();
  }

  render() {
    const { articles } = this.props;
    const publishedArticles = articles.filter(({ published }) => published);

    if (publishedArticles.length === 0) {
      return <ErrorMessage
        title="No Articles Found"
        body="There are no articles to read at the moment. Please come back later."
        color="grey"
        icon="folder open outline"
      />
    }

    return (
      <div className="articles-container">
        <Card.Group centered doubling>
          {publishedArticles.map(({ id, title, body, author, createdAt }) => (
            <Card
              key={id}
              image={logo}
              header={title}
              meta={getYearMonthFromDate(createdAt)}
              description={`${stripTags(body).slice(0, 50)}...`}
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
  articles: getArticlesFromState(state),
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesLayout);
