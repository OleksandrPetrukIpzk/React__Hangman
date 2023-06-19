import {useDispatch, useSelector} from "react-redux";

export const PrevElement = ({numbers, setNumbers, props}) => {

    const prevState = useSelector(state => state.sudoku.prevState);
    const redoState = useSelector(state => state.sudoku.redoState);
    const dispatch = useDispatch();

    const prevElement = (props) => {
        const state = {};
        let tableId = 0;
        const changedPrevState = [];
        changedPrevState.push(...prevState);
        const changedRedoState = [];
        changedRedoState.push(...redoState);

        if (props === "prev") {
            const prevNumbers = numbers.map((row, index) => {
                return row.map(num => {
                    if (num.id === prevState[prevState.length - 1].id) {
                        tableId = index;
                        state.id = num.id;
                        state.number = num.number;
                        return {...num, number: prevState[prevState.length - 1].number}
                    }
                    return num


                })
            })
            changedPrevState.pop();
            changedRedoState.push(state);
            setNumbers(prevNumbers);
        } else if (props === "redo") {
            const redoNumbers = numbers.map((row, index) => {
                return row.map(num => {
                    if (num.id === redoState[redoState.length - 1].id) {
                        tableId = index;
                        state.id = num.id;
                        state.number = num.number
                        return {...num, number: redoState[redoState.length - 1].number}
                    }
                    return num
                })
            })
            setNumbers(redoNumbers);
            changedPrevState.push(state);
            changedRedoState.pop();
        }

        dispatch({type: 'CHANGE_TARGET', id: state.id, payload: state.number, table: tableId});
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        dispatch({type: 'ADD_REDO_CHANGE', payload: changedRedoState});
    }


    return (<button className='main__buttons__button'
                    onClick={() => prevElement(props)}>{props}</button>)
}