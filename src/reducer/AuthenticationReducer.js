const initialState = {
    userId: '',
    email: '',
};

export const authenticationReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_SIGN_IN':
            console.log(action);
            return { 
                ...state,
                userId: action.userId,
                email: action.email
            };
        default:
            return state;
    }
}