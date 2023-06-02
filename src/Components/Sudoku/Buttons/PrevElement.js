import {useDispatch, useSelector} from "react-redux";

export const PrevElement = ({numbers, setNumbers, children,}) => {

    const prevState = useSelector(state => state.sudoku.prevState);
    const dispatch = useDispatch();

    const prevElement = () => {
        const state = {};
        const prevNumbers = numbers.map(row => {
            return row.map(num => {
                if (num.id === prevState.id) {
                    state.id = num.id;
                    state.number = num.number
                    return {...num, number: prevState.number}
                } else {
                    return num
                }

            })
        })
        setNumbers(prevNumbers);
        dispatch({type: 'ADD_PREV_CHANGE', id: state.id, number: state.number})
    }


    return (<button className='main__buttons__button' onClick={() => prevElement()}>{children}</button>)
}