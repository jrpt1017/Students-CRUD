import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import studentsReducer from "../reducers/studentReducer";
import modalReducer from "../reducers/modalReducer";

const rootReducer = combineReducers({
    studentState: studentsReducer,
    modalState: modalReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
