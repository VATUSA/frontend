import React from 'react';

export default class EventsCard extends React.Component {
  componentDidMount() {
    const { getEvents } = this.props;
    getEvents();
  }

  render() {
    return <div>Test</div>;
  }
}

EventsCard.propTypes = {
  getEvents: React.PropTypes.func.isRequired,
};
