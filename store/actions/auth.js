import { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (userId, token) => {
        return { type: AUTHENTICATE, userId: userId, token: token }
};

export const signup = (email, password) => {
    return async dispatch => {
       const response = await fetch(
           "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]", 
        {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        }
        );

        if (!response.ok) {
            const errorResponseData = await response.json();
            const errorId = errorResponseData.error.message;
            let message = "Something went wrong!";
            if (errorId === "EMAIL_EXISTS") {
                message = 'This email exists already!'
            } 
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        dispatch(authenticate(resData.localId, resData.idToken));
        const expirationDate = new Date(
            new Date().getTime() + parseInt(resData.expiresin) * 1000
        );
        saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    };
};

export const login = (email, password) => {
    return async dispatch => {
       const response = await fetch(
           "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]", 
        {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        }
        );

        if (!response.ok) {
            const errorResponseData = await response.json();
            const errorId = errorResponseData.error.message;
            let message = "Something went wrong!";
            if (errorId === "EMAIL_NOT_FOUND") {
                message = 'This email could not be found!'
            } else if (errorId === "INVALID_PASSWORD") {
                message = "This password is not valid!"
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        dispatch(authenticate(resData.localId, resData.idToken));
        const expirationDate = new Date(
            new Date().getTime() + parseInt(resData.expiresin) * 1000
        );
        saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    };
};

export const logout = () => {
    return { type: LOGOUT }
};

const setLogoutTimer = expirationTime => {
    setTimeout(, expirationTime)
};

const saveDataToStorage = (token, userId, expirationDate) => {
    AsyncStorageStatic.setItem(
        "userData", 
        JSON.stringify({
          token: token,
          userId: userId,
          expirDate: expirationDate.toISOString()
        })
    );
};