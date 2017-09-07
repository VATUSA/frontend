import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import EventsCard from './components/Events/container';
import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <section>
          <Header />
          <EventsCard />
        </section>
      </Provider>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.shape({}).isRequired,
};

export default App;
