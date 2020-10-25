import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { studentsReducer } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(studentsReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
