/*  TODO:
    1. Reactstrap integration. DONE.
    2. Install router.
    3. Setup Redux store.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducers from './reducers';
import ReduxPromise from 'redux-promise';

const initialState = {
    site : {
        page    : 'home',
        theme   : 'dark'
    }
};

const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(logger, ReduxPromise)
);


ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root') );

registerServiceWorker();