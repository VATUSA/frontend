import sagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';

import rootReducer from '../reducers';

let enhancer;

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

if (window.__REDUX_DEVTOOLS_EXTENSION__) { //eslint-disable-line
  enhancer = compose(
    applyMiddleware(sagaMiddleware),
    persistState(getDebugSessionKey()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  );
} else {
  enhancer = compose(
    applyMiddleware(sagaMiddleware),
  );
}

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer,
    initialState,
    enhancer);
}
