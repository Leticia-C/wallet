import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// mport thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore((
  rootReducer,
  composeWithDevTools()));

export default store;
