import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import Root from './components/root';

let preloadedState = {};
const store = configureStore(preloadedState);

ReactDOM.render(
  <Root store={store} />
  , document.querySelector('.container'));
