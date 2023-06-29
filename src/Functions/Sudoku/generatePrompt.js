import {checkEveryElement} from "Functions/Sudoku/checkEveryElement";
import {READY_SUDOKU} from "Constants/sudoku";

export const generatePrompt = (numbers, setNumbers, targetId) => {
    if (targetId !== 0) {
        let prompt = 0;
        READY_SUDOKU.map(row=>{
            return row.map(col =>{
                if(col.id === targetId){
                    prompt = col.number;
                }
            })
            }
        );

        const promptNumbers = numbers.map(row => {
            return row.map(number => {
                if (number.id === targetId) {
                    return {...number, number: prompt}
                }
                return number
            })
        })
        setNumbers(promptNumbers);
    }
}