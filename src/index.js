import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';
import './semantic/dist/semantic.min.css';
import ThemingLayout from './theminglayout';

const App = () => <ThemingLayout />;

render(<App />, document.getElementById('app'));
