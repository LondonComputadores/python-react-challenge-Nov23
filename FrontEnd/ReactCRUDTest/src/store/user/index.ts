// src/store/index.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer';

const rootReducer = combineReducers({
  user: userReducer,
  // ... outros reducers, se houver
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
