const fetchFailed = 'DIVSTAFF/FETCH_FAILED';
const fetchSet = 'DIVSTAFF/FETCH_SET';
export const staffFetch = 'DIVSTAFF/FETCH';

export const fetchStaffFailed = () => ({
  type: fetchFailed,
});

export const setStaffData = payload => ({
  type: fetchSet,
  payload,
});

export const fetchStaff = () => ({
  type: staffFetch,
});

export default (state = { data: [], loading: false }, action = {}) => {
  switch (action.type) {
    case staffFetch:
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
