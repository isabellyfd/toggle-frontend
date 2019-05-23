export const onSignUp = (email, userId) => ({
    type: 'USER_SIGN_IN',
    payload: {
        email, 
        userId
    }
});

export const receiveHomePage = (applications) => ({
    type: 'RECEIVE_HOME_PAGE',
    payload: {
        applications
    }
})

export const onClickApplicationTab = (id, name) => ({
    type: 'SELECTED_APPLICATION',
    payload: {
        id, 
        name
    }
})