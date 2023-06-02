import {generateRandomNumber} from "Functions/Sudoku/generateRandomNumber";

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

export    const START = ANSWER.map(row => {
    const arr = [];
    return row.map(num => generateRandomNumber(arr, num))
})
export const REWARD = 100;