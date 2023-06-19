import {DIFICULTY} from "Constants/sudoku";

export const generateWhiteListIds = () => {

    let count = 80 - DIFICULTY;
    const arrIds = [];
    while (count > 0) {
        const randomId = Math.ceil(Math.random() * (80));
        if(!arrIds.includes(randomId)){
            arrIds.push(randomId);
            count -= 1;
        }
    }
    return arrIds;
}