import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

import './semantic/semantic.min.css';

import App from './App';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore(Immutable.fromJS({
  events: {},
}));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
