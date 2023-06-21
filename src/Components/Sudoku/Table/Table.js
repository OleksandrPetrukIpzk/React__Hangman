import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {hasSimilarElements} from "Functions/Sudoku/hasSimilarElements";
import {colorTable} from "Functions/Sudoku/colorTable";
import {Number} from "Components/Sudoku/Table/Number";

export const Table = ({arrTable, idTable, dangerIds, index, numbers}) => {

    const targetId = useSelector(state => state.sudoku.targetId);
    const [styleTable, setStyleTable] = useState({border: "2px solid black"})

    useEffect(() => {
        if (hasSimilarElements(arrTable)) {
            colorTable(setStyleTable, '4px solid red');
        } else if (targetId <= arrTable[arrTable.length - 1].id && targetId >= arrTable[0].id && targetId) {
            colorTable(setStyleTable, '4px solid green');
        } else {
            colorTable(setStyleTable, '4px solid black');
        }
    }, [targetId])

    return (<div id={idTable} className='main__table' style={styleTable}>
        {arrTable.map(({number, id} = arrTable) => <Number dangerIds={dangerIds} number={number} id={id} idTable={index} numbers={numbers}/>)}
    </div>)
}