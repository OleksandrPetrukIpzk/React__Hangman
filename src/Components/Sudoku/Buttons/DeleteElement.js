import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "Functions/Sudoku/changeNumber";
import {EMPTY_STRING, ZERO} from "Constants/sudoku";

export const DeleteElement = ({numbers, setNumbers, arrWhiteIds}) =>{
    const targetId = useSelector(state => state.sudoku.targetId);
    const targetState = useSelector(state => state.sudoku.targetState);
    const prevStates = useSelector(state => state.sudoku.prevStates);
    const idTable = useSelector(state => state.sudoku.idTable);
    const dispatch = useDispatch();

    const deleteElement = () =>{
        if(!arrWhiteIds.includes(targetId)) {
            const changedPrevState = [];
            changedPrevState.push(...prevStates);
            changedPrevState.push({id: targetId, number: targetState})
            dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
            dispatch({type: 'CHANGE_TARGET', id: targetId, payload: EMPTY_STRING, table: idTable});
            if (targetState !== EMPTY_STRING && targetId > ZERO) {
                changeNumber(numbers, targetId, EMPTY_STRING, setNumbers)
            }
        }
    }
    return <button  className='main__buttons__button' onClick={() => deleteElement()}>Delete</button>
}