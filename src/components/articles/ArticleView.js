import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import ActionItems from './actions/ActionList';
import Header from '../home/Header';
import Footer from '../home/Footer';
import { getArticle, likeArticle } from '../../actions/articles';
import { getArticleFromState } from '../../selectors/articles';

class ArticleView extends PureComponent {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getArticle(id);
  }

  render() {
    const { article } = this.props;

    if (!article) {
      return (
        <Dimmer active>
          <Loader size="big">Loading</Loader>
        </Dimmer>
      );
    }

    document.title = article.title;

    return (
      <React.Fragment>
        <Header />
        <div className="page-content">
          <div className="article-header" style={{ backgroundColor: '#5e9de6' }}>
            <h2>{article.title}</h2>
          </div>
          <div className="article-container">
            {/* eslint-disable-next-line react/destructuring-assignment */}
            <ActionItems onLiked={() => this.props.likeArticle(article.id)} />
            <div className="article-content">
              {/* eslint-disable-next-line react/no-danger */}
              <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
              <div className="author">{article.author}</div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

ArticleView.defaultProps = {
  article: null,
};

ArticleView.propTypes = {
  article: PropTypes.object,
  getArticle: PropTypes.func.isRequired,
  likeArticle: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = state => ({
  article: getArticleFromState(state),
});

const mapDispatchToProps = dispatch => ({
  getArticle: id => dispatch(getArticle(id)),
  likeArticle: id => dispatch(likeArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
