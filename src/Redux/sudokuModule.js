
const initialState ={
    targetId: 0,
    targetTable: 0,
    targetState: 0,
    prevStates: [],
    redoStates: [],
}
const sudokuReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CHANGE_TARGET':
            return{...state, targetId: action.id, targetState: action.payload, targetTable: action.table}
        case 'CHANGE_TARGET_VALUE':
            return{...state, targetState: action.payload}
        case 'ADD_PREV_CHANGE':
            return {...state, prevStates: action.payload}
        case 'ADD_REDO_CHANGE':
            return {...state, redoStates: action.payload}
        default: return state
    }
}
export {sudokuReducer}