import * as Messages from "../constants/Message";

var initialState = Messages.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return [...state];
    }
};

export default message;