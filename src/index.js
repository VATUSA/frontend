import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

import './index.css';
import './semantic/semantic.min.css';

import App from './App';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore(Immutable.Map());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
