import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import Root from './components/root';

let preloadedState = {};
const store = configureStore(preloadedState);

// test
import { fetchContainers } from './actions/containers/containers_utils';
import { fetchVessels } from './actions/vessels/vessels_utils';

window.store = store;
window.fetchContainers = fetchContainers;
window.fetchVessels = fetchVessels;

ReactDOM.render(
  <Root store={store} />
  , document.querySelector('.container'));
