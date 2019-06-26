const GET_NEW_BACKGROUND_COLOR = 'GET_NEW_BACKGROUND_COLOR';
const INITIAL_STATE = { color: '#636FA0'};

export const colorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_NEW_BACKGROUND_COLOR:
            return { color: action.payload.color };
        default:
            return state;
    }
}