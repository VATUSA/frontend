const fetchFailed = 'EVENTS/FETCH_FAILED';
const fetchSet = 'EVENTS/FETCH_SET';
export const eventFetch = 'EVENTS/FETCH';

export const fetchEventsFailed = () => ({
  type: fetchFailed,
});

export const setEventData = payload => ({
  type: fetchSet,
  payload,
});

export const fetchEvents = () => ({
  type: eventFetch,
});

export default (state = { data: [], loading: false }, action = {}) => {
  switch (action.type) {
    case eventFetch:
    case fetchFailed:
      return {
        ...state,
        loading: true,
        data: [],
      };
    case fetchSet:
      return {
        ...state,
        loading: false,
        list: action.payload.events,
      };
    default:
      return state;
  }
};
