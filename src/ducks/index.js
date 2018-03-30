import { combineReducers } from 'redux';
import events from './events';
import news from './news';
import facilities from './facilities';
import auth from './auth';

const app = combineReducers({
  events,
  news,
  facilities,
  auth,
});

export default app;
