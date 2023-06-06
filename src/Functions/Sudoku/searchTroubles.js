import {validator} from "Functions/Sudoku/validator";
import {checkEveryElement} from "Functions/Sudoku/checkEveryElement";

export const searchTroubles = (numbers,) => {
    const dangerId = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let y = 0; y < 9; y++) {
            if (numbers[i][y].number !== '') {
              dangerId.push(...checkEveryElement(numbers, i, y, numbers[i][y].number))
            }
        }
    }
    return dangerId;
}