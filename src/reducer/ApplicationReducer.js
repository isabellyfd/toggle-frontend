
const applicationReducer = (state = {}, action) => {
    switch(action.type){
        case 'RECEIVE_HOME_PAGE':
            const payload = action.payload;
            return {
                ...state,
                applications: payload.applications
            };
        default:
            return state;
    }
}

export default applicationReducer;