import {checkEveryElement} from "Functions/Sudoku/checkEveryElement";

export const generatePrompt = (numbers, setNumbers, targetId, targetTable) =>{
    if(targetId !== 0){
    const promptNumbers = numbers.map(row => {
        return row.map(number => {
            if (number.id === targetId) {
                let isRandom = true;
                let prompt = 1;

                while (isRandom){
                    const randomNumber = Math.ceil(Math.random() * (8+1))
                    const indexY = numbers[targetTable].findIndex(num => num.id === targetId);
                    const dangerId = checkEveryElement(numbers, targetTable, indexY, randomNumber);
                    if(dangerId.length === 0){
                        prompt = randomNumber;
                        isRandom = false;
                    }
                }
                    return {...number, number: prompt}
            }
            return number
        })
    })
    setNumbers(promptNumbers);
    }
}