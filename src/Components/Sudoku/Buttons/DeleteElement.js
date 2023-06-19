import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "Functions/Sudoku/changeNumber";
import {ARRIDS} from "Constants/sudoku";

export const DeleteElement = ({numbers, setNumbers}) =>{
    const targetId = useSelector(state => state.sudoku.targetId);
    const targetState = useSelector(state => state.sudoku.targetState);
    const prevState = useSelector(state => state.sudoku.prevState);
    const idTable = useSelector(state => state.sudoku.idTable);
    const dispatch = useDispatch();

    const deleteElement = () =>{
        if(!ARRIDS.includes(targetId)) {
            const changedPrevState = [];
            changedPrevState.push(...prevState);
            changedPrevState.push({id: targetId, number: targetState})
            dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
            dispatch({type: 'CHANGE_TARGET', id: targetId, payload: '', table: idTable});
            if (targetState !== '' && targetId > 0) {
                changeNumber(numbers, targetId, '', setNumbers)
            }
        }
    }
    return <button  className='main__buttons__button' onClick={() => deleteElement()}>Delete</button>
}