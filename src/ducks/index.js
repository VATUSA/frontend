import { combineReducers } from 'redux';
import events from './events';
import news from './news';

const app = combineReducers({
  events,
  news,
});

export default app;
