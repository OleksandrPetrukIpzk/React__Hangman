import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {colorElement} from "Functions/Sudoku/colorElement";

export const Number = ({number, id, dangerId, idTable, numbers}) => {

    const targetId = useSelector(state => state.sudoku.targetId);
    const targetState = useSelector(state => state.sudoku.targetState)
    const dispatch = useDispatch();
    const [style, setStyle] = useState({color: "black", background: "white"})
    const changeTargetId = () => {
        dispatch({type: 'CHANGE_TARGET', id, payload: number, table: idTable})
    }

    useEffect(() => {
        if (targetId === id && dangerId.includes(id)) {
            colorElement(setStyle, 'orange')
        } else if (dangerId.includes(id)) {
            colorElement(setStyle, 'red')
        } else if (targetId === id) {
            colorElement(setStyle, 'green')
        } else {
            colorElement(setStyle, 'white')
        }
        if (targetState === number && number !== '') {
            colorElement(setStyle, 'purple')
            if (targetId === id && dangerId.includes(id)) {
                colorElement(setStyle, 'orange')
            } else if (dangerId.includes(id)) {
                colorElement(setStyle, 'blue')
            } else if (targetId === id && !dangerId.includes(id)) {
                colorElement(setStyle, 'green')
            }
        }
    }, [targetId, numbers, dangerId])

    return (<div id={id} style={style} onClick={changeTargetId} className='main__table__number'>{number} </div>)
}