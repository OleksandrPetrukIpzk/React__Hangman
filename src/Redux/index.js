import { createStore,} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const defaultState = {
    wrong: '',
    trueAnswer: 0,
    infoGame: '[]',
    coins: 0,
    repeatWord: '[]',
    boughtElement: '[]',
    setStyle: '{}',
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
        case 'WIN_MONEY':
            return {...state, coins: state.coins + action.payload}
        case 'ADD_REPEAT_WORD':
            return {...state, repeatWord: action.payload}
        case 'BUY_ELEMENT':
            return {...state, coins: state.coins - action.payload}
        case 'ADD_ELEMENT_TO_LIBRARY':
            return {...state, boughtElement: action.payload}
        case 'SET_ACTUAL_STYLE':
            return {...state, setStyle: action.payload}
        default:
            return state
    }
}
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['infoGame', 'coins', 'repeatWord', 'boughtElement', 'setStyle']
}

const persistedReducer = persistReducer(persistConfig, reducer);
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
