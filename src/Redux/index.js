import {createStore,} from "redux";
import {persistStore, persistCombineReducers} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {storeReducer} from "Redux/storeModule";
import {statisticReducer} from "Redux/statisticsModule";
import {rulesReducer} from "Redux/rulesModule";
import {sudokuReducer} from "Redux/sudokuModule";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [`statistics`, `store`,]
}

const persistedReducer = persistCombineReducers(persistConfig, {
    rules: rulesReducer,
    statistics: statisticReducer,
    store: storeReducer,
    sudoku: sudokuReducer
});

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
