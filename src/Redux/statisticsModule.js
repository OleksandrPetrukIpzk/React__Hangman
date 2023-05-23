const initialState = {
    infoGame: '[]',
    repeatWord: '[]',
}
const statisticReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return {...state, infoGame: action.payload}
        case 'ADD_REPEAT_WORD':
            return {...state, repeatWord: action.payload}

        default:
            return state
    }
}
export {statisticReducer}

