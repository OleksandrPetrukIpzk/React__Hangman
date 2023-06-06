import {validator} from "Functions/Sudoku/validator";

export const checkEveryElement = (numbers, i, y, thisNumber) =>{

    const dangerId = [];
    if (i <= 2) {
        if (y <= 2) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 3], y, 3, -6));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 6], y, 3, -6));
        }
        if (y >= 3 && i <= 5) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 3], y, 3, 3));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 6], y, 3, 3));
        }
        if (y >= 6 && y <= 8) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 3], y, -3, 6));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 6], y, -3, 6));
        }
    }
    if (i >= 3 && i <= 5) {
        if (y <= 2) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 3], y, 3, -6))
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 3], y, 3, -6))
        }
        if (y >= 3 && i <= 5) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 3], y, 3, 3))
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 3], y, 3, 3))
        }
        if (y >= 6 && y <= 8) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 3], y, -3, 6))
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 3], y, -3, 6))
        }
    }
    if (i >= 6) {
        if (y <= 2) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 3], y, 3, -6))
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 6], y, 3, -6))
        }
        if (y >= 3 && i <= 5) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 3], y, 3, 3))
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 6], y, 3, 3))
        }
        if (y >= 6 && y <= 8) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 3], y, -3, 6))
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 6], y, -3, 6))
        }
    }
    if (i === 0 || i === 3 || i === 6) {
        if (y === 0 || y === 3 || y === 6) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 1], y, 1, -2));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 2], y, 1, -2));
        }
        if (y === 1 || y === 4 || y === 7) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 1], y, 1, 1));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 2], y, 1, 1));
        }
        if (y === 2 || y === 5 || y === 8) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 1], y, -1, 2));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 2], y, -1, 2));
        }
    }
    if (i === 1 || i === 4 || i === 7) {
        if (y === 0 || y === 3 || y === 6) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 1], y, 1, -2));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 1], y, 1, -2));
        }
        if (y === 1 || y === 4 || y === 7) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 1], y, 1, 1));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 1], y, 1, 1));
        }
        if (y === 2 || y === 5 || y === 8) {
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i - 1], y, -1, 2));
            dangerId.push(...validator(numbers[i], thisNumber, numbers[i + 1], y, -1, 2));
        }
    }
    return dangerId;
}