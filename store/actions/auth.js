export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
    return async dispatch => {
       const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxH2HfijdC3SqeT4cVHZBXW10r_QH9xHI", 
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
            throw new Error('Something went wrong!')
        }
        dispatch({type: SIGNUP});
    };
};