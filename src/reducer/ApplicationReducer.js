
const applicationReducer = (state = {}, action) => {
    switch(action.type){
        case 'RECEIVE_HOME_PAGE':
            console.log('home page state', state);
            return state;
        default:
            return state;
    }
}

export default applicationReducer;