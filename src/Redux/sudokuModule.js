
const initialState ={
    targetId: 0,
    targetState: 0,
    prevState: [],
    redoState: [],
}
const sudokuReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CHANGE_TARGET':
            return{...state, targetId: action.id, targetState: action.payload}
        case 'CHANGE_TARGET_VALUE':
            return{...state, targetState: action.payload}
        case 'ADD_PREV_CHANGE':
            return {...state, prevState: action.payload}
        case 'ADD_REDO_CHANGE':
            return {...state, redoState: action.payload}
        default: return state
    }
}
export {sudokuReducer}