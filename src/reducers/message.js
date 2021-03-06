import * as Messages from "../constants/Message";
import * as Types from "./../constants/ActionType";

var initialState = Messages.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default: 
            return [...state];
    }
};

export default message;