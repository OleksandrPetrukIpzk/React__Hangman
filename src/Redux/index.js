import {createStore} from "redux";

if (JSON.parse(localStorage.getItem('infoGame')) === null) {
    localStorage.setItem('infoGame', JSON.stringify([]));
}
const defaultState = {
    wrong: '',
    trueAnswer: 0,
    infoGame: JSON.parse(localStorage.getItem('infoGame'))

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
export const store = createStore(reducer)