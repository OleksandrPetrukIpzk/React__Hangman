import {useDispatch, useSelector} from "react-redux";
import {generatePrompt} from "Functions/Sudoku/generatePrompt";
import {EMPTY_STRING} from "Constants/sudoku";

export const PromptNumber = ({numbers, setNumbers}) => {
    const targetState = useSelector(state => state.sudoku.targetState);
    const targetId = useSelector(state => state.sudoku.targetId);
    const prevStates = useSelector(state => state.sudoku.prevStates);
    const targetTable = useSelector(state => state.sudoku.targetTable);
    const dispatch = useDispatch();

    const answer = () => {
        if (targetState === EMPTY_STRING) {
            const changedPrevState = [];
            changedPrevState.push(...prevStates);
            changedPrevState.push({id: targetId, number: targetState})
            dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
            generatePrompt(numbers, setNumbers, targetId, targetTable);
        }
    }

    return (<button className='main__buttons__button' onClick={() => answer()}>Prompt</button>)
}