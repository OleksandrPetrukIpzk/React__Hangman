import {searchIdsRows} from "Functions/Sudoku/searchIdsRows";
import {searchIdsColumns} from "Functions/Sudoku/searchIdsColumns";

export const checkEveryElement = (numbers, i, y, thisNumber) =>{
    const dangerIds = [];
    if(i <= 2){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 0, 3));
    }
    if(i >= 3 && i <= 5){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 3, 6));
    }
    if(i >= 6){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 6, 9));
    }
    if (i === 0 || i === 3 || i === 6) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 0, 7));
    }
    if (i === 1 || i === 4 || i === 7) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 1, 8));
    }
    if (i === 2 || i === 5 || i === 8) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 2, 9));
    }
    for(let j = 0; j < 9; j++){
        if(numbers[i][j].number === thisNumber && numbers[i][j].id !== numbers[i][y].id){
            dangerIds.push(numbers[i][j].id);
        }
    }
    return dangerIds
}