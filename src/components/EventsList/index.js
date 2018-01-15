import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Feed } from 'semantic-ui-react';
import { fetchEvents } from '../../ducks/events';

class EventsList extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderEventsList() {
    const { events } = this.props;
    const list = events.map(event => (
      <Feed.Event key={event.id}>
        <Feed.Label icon="plane" />
        <Feed.Content>
          <Feed.Date content={event.humandate} />
          <Feed.Summary><span dangerouslySetInnerHTML={{ __html: event.title }} /></Feed.Summary>
        </Feed.Content>
      </Feed.Event>));
    return list;
  }

  render() {
    return (
      <Card centered fluid>
        <Card.Content>
          <Card.Header>
            Upcoming Events
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            {this.renderEventsList()}
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

EventsList.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

EventsList.defaultProps = {
  events: [],
};

const mapStateToProps = state => ({
  events: state.events.list,
});

const mapDispatchToProps = {
  fetchEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
