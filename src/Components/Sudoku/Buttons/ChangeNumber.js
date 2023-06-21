import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "Functions/Sudoku/changeNumber";
import {fillStatus} from "Functions/Sudoku/fillStatus";
import {TWO_CHOSE_BUTTON, FOUR_CHOSE_BUTTON, SIX_CHOSE_BUTTON, NINE_CHOSE_BUTTON} from "Constants/sudoku";

export const ChangeNumber = ({number, numbers, setNumbers, arrWhiteIds}) => {

    const [status, setStatus] = useState(0);
    const targetState = useSelector(state => state.sudoku.targetState);
    const targetId = useSelector(state => state.sudoku.targetId);
    const prevStates = useSelector(state => state.sudoku.prevStates);
    const idTable = useSelector(state => state.sudoku.idTable);
    const dispatch = useDispatch();

    const addPrevChange = () => {
        if(!arrWhiteIds.includes(targetId)){

        const changedPrevState = [];
        changedPrevState.push(...prevStates);
        changedPrevState.push({id: targetId, number: targetState})
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        dispatch({type: 'CHANGE_TARGET', id: targetId, payload: number, table: idTable});
        changeNumber(numbers, targetId, number, setNumbers);
        }
    }

    useEffect(() => {
        return fillStatus(setStatus, numbers, number);
    }, [targetId])

    return (<div>
        <p>{status}</p>
        <button onClick={() => addPrevChange()}
                className='main__buttons__button'
                style={{
                    borderTop: `${status > TWO_CHOSE_BUTTON && '3px solid blue'}`,
                    borderRight: `${status > FOUR_CHOSE_BUTTON && '3px solid blue'}`,
                    borderBottom: `${status > SIX_CHOSE_BUTTON && '3px solid blue'}`,
                    borderLeft: `${status > NINE_CHOSE_BUTTON && '3px solid blue'}`
                }}>
            {number}
        </button>
    </div>)
}