const fetchFailed = 'NEWS/FETCH_FAILED';
const fetchSet = 'NEWS/FETCH_SET';
export const newsFetch = 'NEWS/FETCH';

export const fetchNewsFailed = () => ({
  type: fetchFailed,
});

export const setNewsData = payload => ({
  type: fetchSet,
  payload,
});

export const fetchNews = () => ({
  type: newsFetch,
});

export default (state = { data: [], loading: false }, action = {}) => {
  switch (action.type) {
    case newsFetch:
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
        list: action.payload.news,
      };
    default:
      return state;
  }
};
