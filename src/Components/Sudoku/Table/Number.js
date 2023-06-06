import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {colorElement} from "Functions/Sudoku/colorElement";

export const Number = ({number, id, dangerId, idTable}) => {

    const targetId = useSelector(state => state.sudoku.targetId);
    const targetState = useSelector(state => state.sudoku.targetState)
    const dispatch = useDispatch();

    const changeTargetId = () => {
        console.log(idTable)
        dispatch({type: 'CHANGE_TARGET', id, payload: number, table: idTable})
    }
    useEffect(() => {
        if (targetId === id && dangerId.includes(id)) {
            colorElement(id, 'orange')
        } else if (dangerId.includes(id)) {
            colorElement(id, 'red')
        } else if (targetId === id) {
            colorElement(id, 'green')
        } else {
            colorElement(id, 'white')
        }
        if (targetState === number && number !== '') {
            colorElement(id, 'purple')
            if (targetId === id && dangerId.includes(id)) {
                colorElement(id, 'orange')
            } else if (dangerId.includes(id)) {
                colorElement(id, 'blue')
            }
        }
    }, [targetId])

    return (<div id={id} onClick={changeTargetId} className='main__table__number'>{number} </div>)
}