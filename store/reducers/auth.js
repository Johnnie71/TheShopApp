import { AUTHENTICATE, LOGOUT } from "../actions/auth";

const initialState = {
    token: null,
    userId: null,
    didTryAutoLogin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                token: action.token,
                userId: action.userId,
                didTryAutoLogin: true
            };
        case LOGOUT:
            return initialState;
        // case SIGNUP:
        //     return {
        //         token: action.token,
        //         userId: action.userId
        //     };
            default: 
                return state;
    }
}