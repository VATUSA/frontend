import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import './semantic/dist/semantic.min.css';
import Layout from './components/layout';

const store = configureStore();

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
