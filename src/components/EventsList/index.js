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
    const list = events.map(event => (<Feed.Event icon="plane" key={event.id} summary={event.title} date={event.date} />));
    return list;
  }

  render() {
    return (
      <Card>
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
