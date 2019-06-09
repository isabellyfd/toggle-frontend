const toggleReducer = (state = {}, action) => {
    switch(action.type){
        case 'RECEIVE_TOGGLE_PAGE':
            const payload = action.payload;
            return { 
                ...state,
                toggles: payload.toggles,
            };
        default:
            return state;
    }
}

export default toggleReducer;