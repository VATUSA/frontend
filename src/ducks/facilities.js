const fetchFailed = 'FACILITIES/FETCH_FAILED';
const fetchSet = 'FACILITIES/FETCH_SET';
export const facilitiesFetch = 'FACILITIES/FETCH';

export const fetchFacilitiesFailed = () => ({
  type: fetchFailed,
});

export const setFacilitiesData = payload => ({
  type: fetchSet,
  payload,
});

export const fetchFacilities = () => ({
  type: facilitiesFetch,
});

export default (state = { data: [], loading: false }, action = {}) => {
  switch (action.type) {
    case facilitiesFetch:
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
        list: action.payload,
      };
    default:
      return state;
  }
};
