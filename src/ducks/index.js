import { combineReducers } from 'redux';
import events from './events';
import news from './news';
import facilities from './facilities';
import divStaff from './divStaff';

const app = combineReducers({
  events,
  news,
  facilities,
  divStaff,
});

export default app;
