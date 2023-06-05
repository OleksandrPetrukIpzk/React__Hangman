import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "Functions/Sudoku/changeNumber";
import {fillStatus} from "Functions/Sudoku/fillStatus";

export const ChangeNumber = ({number, numbers, setNumbers}) => {

    const [status, setStatus] = useState(0);
    const targetState = useSelector(state => state.sudoku.targetState);
    const targetId = useSelector(state => state.sudoku.targetId);
    const prevState = useSelector(state => state.sudoku.prevState);
    const dispatch = useDispatch();

    const addPrevChange = () => {
        const changedPrevState = [];
        changedPrevState.push(...prevState);
        changedPrevState.push({id: targetId, number: targetState})
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        changeNumber(numbers, targetId, number, setNumbers);
    }

    useEffect(() => {
        return fillStatus(setStatus, numbers, number);
    }, [targetId])

    return (<div>
        <p>{status}</p>
        <button onClick={() => addPrevChange()}
                className='main__buttons__button'
                style={{
                    borderTop: `${status > 2 && '3px solid blue'}`,
                    borderRight: `${status > 4 && '3px solid blue'}`,
                    borderBottom: `${status > 6 && '3px solid blue'}`,
                    borderLeft: `${status > 9 && '3px solid blue'}`
                }}>
            {number}
        </button>
    </div>)
}