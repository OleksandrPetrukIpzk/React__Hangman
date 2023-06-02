
const initialState ={
    targetId: 0,
    targetState: 0,
    prevState: {},
}
const sudokuReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CHANGE_TARGET':
            return{...state, targetId: action.id, targetState: action.payload}
        case 'CHANGE_TARGET_VALUE':
            return{...state, targetState: action.payload}
        case 'ADD_PREV_CHANGE':
            return {...state, prevState: {id: action.id, number: action.number}}
        default: return state
    }
}
export {sudokuReducer}