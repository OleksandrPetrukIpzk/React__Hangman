import {useDispatch, useSelector} from "react-redux";
import {generatePrompt} from "Functions/Sudoku/generatePrompt";

export const PromptNumber = ({numbers, setNumbers}) => {
    const targetState = useSelector(state => state.sudoku.targetState);
    const targetId = useSelector(state => state.sudoku.targetId);
    const dispatch = useDispatch();
    const answer = () => {
        if (targetState === '') {
            dispatch({type: 'ADD_PREV_CHANGE', id: targetId, number: targetState,})
            generatePrompt(numbers, setNumbers, targetId);
        }
    }

    return (<button className='main__buttons__button' onClick={() => answer()}>Prompt</button>)
}