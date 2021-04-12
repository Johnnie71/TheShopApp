export const SIGNUP = 'SIGNUP';

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
            throw new Error('Something went wrong!');
        }

        const resData = await response.json();

        dispatch({type: SIGNUP});
    };
};

export const login = (email, password) => {
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
            throw new Error('Something went wrong!');
        }

        const resData = await response.json();

        dispatch({type: SIGNUP});
    };
};