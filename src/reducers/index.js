import { combineReducers } from 'redux';

// calling the default reducer to create a link
import siteReducer from './siteReducer';

const rootReducers = combineReducers({
    // add reducer files references here
    site: siteReducer
});

export default rootReducers;