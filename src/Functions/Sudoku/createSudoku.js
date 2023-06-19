import {ARRIDS} from "Constants/sudoku";

export const createSudoku = (col) => {

    if (!ARRIDS.includes(col.id)) {
        col.number = '';
    }
    return col;
}