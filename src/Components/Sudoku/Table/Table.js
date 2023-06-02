import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Number} from "Components/Sudoku/Table/Number";
import {hasSimilarElements} from "Functions/Sudoku/hasSimilarElements";

export const Table = ({arrTable, idTable, dangerId}) => {

    const targetId = useSelector(state => state.sudoku.targetId);

    useEffect(() => {
        if (hasSimilarElements(arrTable)) {
            document.getElementById(idTable).style.border = '4px solid red';
        } else if (targetId <= arrTable[arrTable.length - 1].id && targetId >= arrTable[0].id && targetId) {
            document.getElementById(idTable).style.border = '4px solid green'
        } else {
            document.getElementById(idTable).style.border = '4px solid black';
        }
    }, [targetId])

    return (<div id={idTable} className='main__table'>
        {arrTable.map(({number, id} = arrTable) => <Number dangerId={dangerId} number={number} id={id}/>)}
    </div>)
}