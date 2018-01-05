import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';

import configureStore from './store/configureStore';
import './semantic/dist/semantic.min.css';
import Layout from './components/layout';

const store = configureStore();

const App = () => <Layout store={ store } />;

render(<App />, document.getElementById('app'));
