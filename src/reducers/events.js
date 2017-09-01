import Immutable from 'immutable';
import { ActionTypes } from '../constants';

export default function events(state = Immutable.fromJS({ isFetching: false }), action) {
  switch (action.type) {
    case ActionTypes.GET_EVENTS:
      return state.setIn(['isFetching'], true);
    case ActionTypes.RECEIVE_EVENTS:
      return state.setIn(['isFetching'], false)
        .setIn(['events'], action.events);
    default:
      return state;
  }
}
