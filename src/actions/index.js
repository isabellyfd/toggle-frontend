export const signUp = (email, userId) => ({
    type: 'USER_SIGN_IN',
    action: {
        email, 
        userId
    }
});