import {
    CHANGE_ANIMATION, CHANGE_LOG,
    SET_COLOR,
    SET_COUNTER,
    SET_MAIN_TEXT,
    SET_SECONDARY_TEXT
} from "../action/userAction";


const userReducer = (state, action) => {
    switch (action.type) {
        case SET_COLOR:
            return {...state, color: action.payload}
        case SET_MAIN_TEXT:
            return {...state, mainText: action.payload}
        case SET_SECONDARY_TEXT:
            return {...state, secondaryText: action.payload}
        case SET_COUNTER:
            return {...state, counter: action.payload}
        case CHANGE_ANIMATION:
            return {...state, isAnimation: action.payload}
        case CHANGE_LOG:
            return {...state, logFile: action.payload}
        default:
            return state;
    }
}

export default userReducer;