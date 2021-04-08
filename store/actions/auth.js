export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
    return async dispatch => {
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxH2HfijdC3SqeT4cVHZBXW10r_QH9xHI");
        dispatch({type: SIGNUP});
    };
};