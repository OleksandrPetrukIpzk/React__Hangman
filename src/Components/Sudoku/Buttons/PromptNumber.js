import {useDispatch, useSelector} from "react-redux";
import {generatePrompt} from "Functions/Sudoku/generatePrompt";

export const PromptNumber = ({numbers, setNumbers}) => {
    const targetState = useSelector(state => state.sudoku.targetState);
    const targetId = useSelector(state => state.sudoku.targetId);
    const prevState = useSelector(state => state.sudoku.prevState);
    const dispatch = useDispatch();
    const answer = () => {
        if (targetState === '') {
            const changedPrevState = [];
            changedPrevState.push(...prevState);
            changedPrevState.push({id: targetId, number: targetState})
            dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
            generatePrompt(numbers, setNumbers, targetId);
        }
    }

    return (<button className='main__buttons__button' onClick={() => answer()}>Prompt</button>)
}