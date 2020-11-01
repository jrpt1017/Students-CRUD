import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import studentsReducer from "../reducers/studentReducer";

export const store = createStore(studentsReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
