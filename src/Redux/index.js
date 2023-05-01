import { createStore,} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const defaultState = {
    wrong: '',
    trueAnswer: 0,
    infoGame: '[]',

}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TRUE_ANSWER':
            return {...state, trueAnswer: state.trueAnswer + 1}
        case 'CHANGE_WRONG':
            return {...state, wrong: action.payload}
        case 'ADD_LIST':
            return {...state, infoGame: action.payload}
        case 'BREAK_WRONG_LETTER':
            return {...state, wrong: '', trueAnswer: 0}
        default:
            return state
    }
}
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['infoGame']
}

const persistedReducer = persistReducer(persistConfig, reducer);
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
