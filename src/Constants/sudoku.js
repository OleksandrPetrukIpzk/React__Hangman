
import {mixGenerate} from "Functions/Sudoku/mixGenerate";

export const ANSWER = [[{id: 1, number: ''}, {id: 2, number: ''}, {id: 3, number: ''}, {id: 4, number: ''}, {
    id: 5,
    number: ''
}, {id: 6, number: ''}, {id: 7, number: ''}, {id: 8, number: ''}, {id: 9, number: ''},], [{
    id: 10,
    number: ''
}, {id: 11, number: ''}, {id: 12, number: ''}, {id: 13, number: ''}, {id: 14, number: ''}, {
    id: 15,
    number: ''
}, {id: 16, number: ''}, {id: 17, number: ''}, {id: 18, number: ''},], [{id: 19, number: ''}, {
    id: 20,
    number: ''
}, {id: 21, number: ''}, {id: 22, number: ''}, {id: 23, number: ''}, {id: 24, number: ''}, {
    id: 25,
    number: ''
}, {id: 26, number: ''}, {id: 27, number: ''},], [{id: 28, number: ''}, {id: 29, number: ''}, {
    id: 30,
    number: ''
}, {id: 31, number: ''}, {id: 32, number: ''}, {id: 33, number: ''}, {id: 34, number: ''}, {
    id: 35,
    number: ''
}, {id: 36, number: ''},], [{id: 37, number: ''}, {id: 38, number: ''}, {id: 39, number: ''}, {
    id: 40,
    number: ''
}, {id: 41, number: ''}, {id: 42, number: ''}, {id: 43, number: ''}, {id: 44, number: ''}, {
    id: 45,
    number: ''
},], [{id: 46, number: ''}, {id: 47, number: ''}, {id: 48, number: ''}, {id: 49, number: ''}, {
    id: 50,
    number: ''
}, {id: 51, number: ''}, {id: 52, number: ''}, {id: 53, number: ''}, {id: 54, number: ''},], [{
    id: 55,
    number: ''
}, {id: 56, number: ''}, {id: 57, number: ''}, {id: 58, number: ''}, {id: 59, number: ''}, {
    id: 60,
    number: ''
}, {id: 61, number: ''}, {id: 62, number: ''}, {id: 63, number: ''},], [{id: 64, number: ''}, {
    id: 65,
    number: ''
}, {id: 66, number: ''}, {id: 67, number: ''}, {id: 68, number: ''}, {id: 69, number: ''}, {
    id: 70,
    number: ''
}, {id: 71, number: ''}, {id: 72, number: ''},], [{id: 73, number: ''}, {id: 74, number: ''}, {
    id: 75,
    number: ''
}, {id: 76, number: ''}, {id: 77, number: ''}, {id: 78, number: ''}, {id: 79, number: ''}, {
    id: 80,
    number: ''
}, {id: 81, number: ''},],

]
const typeGenerate = Math.ceil(Math.random() * 8);

export const READY_SUDOKU = ANSWER.map((row, index) => {
    switch (typeGenerate) {
        case 1: {
            return mixGenerate(0, 6, 3, 1, 7, 4, 2,8,5, index, row);
        }
        case 2: {
            return mixGenerate(1, 4, 7, 0, 3, 6, 2,5,8, index, row);
        }
        case 3:{
            return mixGenerate(1, 4, 7, 0, 3, 6, 2,5,8, index, row);
        }
        case 4:{
            return mixGenerate(2, 5, 8, 0, 3, 6, 1,4,7, index, row);
        }
        case 5:{
            return mixGenerate(6, 3, 0, 4, 7, 1, 5,8,2, index, row);
        }
        case 6:{
            return mixGenerate(3, 0, 6, 7, 4, 1, 8,5,2, index, row);
        }
        case 7: {
            return mixGenerate(6, 3, 0, 7, 4, 1, 8,5,2, index, row);
        }
        case 8: {
            return mixGenerate(3, 6, 0, 4, 7, 1, 5,8,2, index, row);
        }
        default: break;
    }


})


export const REWARD = 100;

export const NUMBER_BUTTONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const TWO_CHOSE_BUTTON = 2;

export const FOUR_CHOSE_BUTTON = 4;

export const SIX_CHOSE_BUTTON = 6;

export const NINE_CHOSE_BUTTON = 9;

export const ZERO = 0;

export const EMPTY_STRING = "";

export const ONE = 1;
