const GET_NEW_QUOTE = 'GET_NEW_QUOTE';
const INITIAL_STATE = { quote: '', author: ''};

export const quoteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_NEW_QUOTE:
            return { quote: action.payload.quote, author: action.payload.author };
        default:
            return state;
    }
}