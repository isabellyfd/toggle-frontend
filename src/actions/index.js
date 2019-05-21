export const onSignUp = (email, userId) => ({
    type: 'USER_SIGN_IN',
    payload: {
        email, 
        userId
    }
});