import {useEffect} from "react";
import {useSelector} from "react-redux";
import {hasSimilarElements} from "Functions/Sudoku/hasSimilarElements";
import {colorTable} from "Functions/Sudoku/colorTable";
import {Number} from "Components/Sudoku/Table/Number";

export const Table = ({arrTable, idTable, dangerId}) => {

    const targetId = useSelector(state => state.sudoku.targetId);

    useEffect(() => {
        if (hasSimilarElements(arrTable)) {
            colorTable(idTable, '4px solid red');
        } else if (targetId <= arrTable[arrTable.length - 1].id && targetId >= arrTable[0].id && targetId) {
            colorTable(idTable, '4px solid green');
        } else {
            colorTable(idTable, '4px solid black');
        }
    }, [targetId])

    return (<div id={idTable} className='main__table'>
        {arrTable.map(({number, id} = arrTable) => <Number dangerId={dangerId} number={number} id={id} idTable={idTable}/>)}
    </div>)
}