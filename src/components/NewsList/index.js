import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Feed } from 'semantic-ui-react';
import { fetchNews } from '../../ducks/news';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderNewsList() {
    const { news } = this.props;
    const list = news.map(newsItem => (<Feed.Event icon="newspaper" key={newsItem.id} summary={newsItem.subject} date={newsItem.humandate} />));
    return list;
  }

  render() {
    return (
      <Card centered fluid>
        <Card.Content>
          <Card.Header>
            Recent News
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            {this.renderNewsList()}
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

NewsList.propTypes = {
  fetchNews: PropTypes.func.isRequired,
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

NewsList.defaultProps = {
  news: [],
};

const mapStateToProps = state => ({
  news: state.news.list,
});

const mapDispatchToProps = {
  fetchNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
