import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as eventsActions from '../../actions/events';
import EventsCard from './index';

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => bindActionCreators(eventsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventsCard);
