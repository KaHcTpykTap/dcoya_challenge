import {applyMiddleware, createStore} from "redux";
import userReducer from "../reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
    color: '#89cff0',
    mainText: '58',
    secondaryText: 'Your Score',
    counter: '4',
    isAnimation: false,
    logFile: null
}

export const store = createStore(userReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));