import {useDispatch, useSelector} from "react-redux";

export const PrevElement = ({numbers, setNumbers, props}) => {

    const prevState = useSelector(state => state.sudoku.prevState);
    const redoState = useSelector(state => state.sudoku.redoState);
    const dispatch = useDispatch();

    const prevElement = () => {
        const state = {};
        let tableId = 0;
        const changedPrevState = [];
        changedPrevState.push(...prevState);
        const changedRedoState = [];
        changedRedoState.push(...redoState);

        const prevNumbers = numbers.map((row, index) => {
            return row.map(num => {
                if (num.id === prevState[prevState.length - 1].id) {
                    tableId = index;
                    state.id = num.id;
                    state.number = num.number;
                    return {...num, number: prevState[prevState.length - 1].number}
                } else {
                    return num
                }

            })
        })
        setNumbers(prevNumbers);
        changedPrevState.pop();
        changedRedoState.push(state);
        dispatch({type: 'CHANGE_TARGET', id: state.id, payload: state.number, table: tableId});
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        dispatch({type: 'ADD_REDO_CHANGE', payload: changedRedoState});
    }

    const redoElement = () => {
        const state = {};
        const changedPrevState = [];
        let tableId = 0;
        changedPrevState.push(...prevState);
        const changedRedoState = [];
        changedRedoState.push(...redoState);
        const redoNumbers = numbers.map((row, index) => {
            return row.map(num => {
                if (num.id === redoState[redoState.length - 1].id) {
                    tableId = index;
                    state.id = num.id;
                    state.number = num.number
                    return {...num, number: redoState[redoState.length - 1].number}
                } else {
                    return num
                }

            })
        })
        setNumbers(redoNumbers);
        changedPrevState.push(state);
        changedRedoState.pop();
        dispatch({type: 'CHANGE_TARGET', id: state.id, payload: state.number, table: tableId});
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        dispatch({type: 'ADD_REDO_CHANGE', payload: changedRedoState});
    }

    return (<button className='main__buttons__button'
                    onClick={() => (props === 'prev' && prevElement()) || (props === 'redo' && redoElement())}>{props}</button>)
}