// default reducer
// Note: You can remove this reducer and create your own reducer

//import { FETCH_DATA } from '../actions';
export default (state = {}, action) => {
    switch(action.type) {

        case 'SET_PAGE': {
            state = {...state, page: action.payload};
            break;
        }
        
        case 'SET_THEME': {
            state = {...state, theme: action.payload};
            break;
        }

        default : return state;
    }
    return state;
}