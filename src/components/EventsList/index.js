import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEvents } from '../../ducks/events';

class EventsList extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderEventsList() {
    const { events } = this.props;
    const list = events.map(event => (<li key={event.id}>{event.title}</li>));
    return list;
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderEventsList()}
        </ul>
      </div>
    );
  }
}

EventsList.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.array
};

EventsList.defaultProps = {
  events: []
}

const mapStateToProps = state => ({
  events: state.events.list,
});

const mapDispatchToProps = {
  fetchEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
