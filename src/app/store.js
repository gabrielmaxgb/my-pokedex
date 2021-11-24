import {
  createStore,
  applyMiddleware,
} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });