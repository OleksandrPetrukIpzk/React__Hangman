import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "Functions/Sudoku/changeNumber";

export const DeleteElement = ({numbers, setNumbers}) =>{
    const targetId = useSelector(state => state.sudoku.targetId);
    const targetState = useSelector(state => state.sudoku.targetState);
    const prevState = useSelector(state => state.sudoku.prevState);
    const dispatch = useDispatch();

    const deleteElement = () =>{
        const changedPrevState = [];
        changedPrevState.push(...prevState);
        changedPrevState.push({id: targetId, number: targetState})
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        if(targetState !== '' && targetId > 0){
            changeNumber(numbers, targetId, '', setNumbers)
        }
    }
    return <button  className='main__buttons__button' onClick={() => deleteElement()}>Delete</button>
}