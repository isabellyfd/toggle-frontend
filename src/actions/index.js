export const onSignUp = (email, userId) => ({
    type: 'USER_SIGN_IN',
    payload: {
        email, 
        userId
    }
});

export const receiveHomePage = () => ({
    type: 'RECEIVE_HOME_PAGE'
})