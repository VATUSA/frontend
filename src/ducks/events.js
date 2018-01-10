export const eventFetchFailed = 'EVENTS/FETCH_FAILED';
export const eventFetchSet = 'EVENTS/FETCH_SET';
export const eventFetch = 'EVENTS/FETCH';

export default (state = { data: [], loading: false }, action = {}) => {
  switch (action.type) {
    case eventFetch:
    case eventFetchFailed:
      return {
        ...state,
        loading: true,
        data: [],
      };
    case eventFetchSet:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
