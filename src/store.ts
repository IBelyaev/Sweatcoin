import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import reducers, { ApplicationState } from './reducers';

const middlewares = [thunk];

export const store: Store<ApplicationState> = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
