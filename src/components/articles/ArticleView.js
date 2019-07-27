import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import { getArticle } from '../../actions/articles';
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

    const { title, body, author } = article;

    return (
      <React.Fragment>
        <Header />
        <div className="page-content">
          <div className="article-header" style={{ backgroundColor: '#5e9de6' }}>
            <h2>{title}</h2>
          </div>
          <div className="article-container">
            <div className="article-content">
              <div className="article-body">{body}</div>
              <div className="author">{author}</div>
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
  match: PropTypes.shape({ params: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = state => ({
  article: getArticleFromState(state),
});

const mapDispatchToProps = dispatch => ({
  getArticle: id => dispatch(getArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);