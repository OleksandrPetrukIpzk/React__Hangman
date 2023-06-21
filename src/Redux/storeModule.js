const initialState = {
    coins: 0,
    boughtElement: '[]',
    backgroundStyle: '{}',
}
const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WIN_MONEY':
            return {...state, coins: state.coins + action.payload}
        case 'BUY_ELEMENT':
            return {...state, coins: state.coins - action.payload}
        case 'ADD_ELEMENT_TO_LIBRARY':
            return {...state, boughtElement: action.payload}
        case 'SET_ACTUAL_STYLE':
            return {...state, backgroundStyle: action.payload}
        case 'SELL_ELEMENT':
            return {...state, coins: action.payload + state.coins}
        default:
            return state
    }
}
export {storeReducer}
