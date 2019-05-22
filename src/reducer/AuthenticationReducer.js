
const authenticationReducer = (state = {}, action) => {
    switch(action.type){
        case 'USER_SIGN_IN':
            const payload = action.payload;
            return { 
                ...state,
                userId: payload.userId,
                email: payload.email
            };
        default:
            return state;
    }
}

export default authenticationReducer;