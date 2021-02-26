/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from './localStorage';

import onlineStoreApp from './reducer';

const persistedState = loadState();
export const store = createStore(
  onlineStoreApp,
  persistedState,
  composeWithDevTools(),
);
