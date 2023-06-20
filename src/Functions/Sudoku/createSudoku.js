import {READY_SUDOKU} from "Constants/sudoku";
export const createSudoku = (arrWhiteIds) => {
    const start = JSON.parse(JSON.stringify(READY_SUDOKU)).map(row => {
        return row.map(col => {
            if (!arrWhiteIds.includes(col.id)) {
                col.number = '';
            }
            return col;
        })
    })
    return start;
}