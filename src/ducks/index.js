import { combineReducers } from 'redux';
import events from './events';
import news from './news';
import facilities from './facilities';

const app = combineReducers({
  events,
  news,
  facilities,
});

export default app;
