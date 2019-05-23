
const applicationReducer = (state = {}, action) => {
    const payload = action.payload;
    switch(action.type){
        case 'RECEIVE_HOME_PAGE':
            return {
                ...state,
                applications: payload.applications
            };

        case 'SELECTED_APPLICATION':
            return {
                ...state,
                chosenApplicationName: payload.name, 
                chosenApplicationId: payload.id
            }
        default:
            return state;
    }
}

export default applicationReducer;