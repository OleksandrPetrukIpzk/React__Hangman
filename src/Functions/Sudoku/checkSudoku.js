
export const checkSudoku = (numbers, i, y, thisNumber, startCountRow, endCountRow, incrementRow, startCountColumn, endCountColumn, incrementColumn) =>{
    const arr = [];
    for(let l = startCountRow; l < endCountRow; l+=incrementRow){
        for(let j = startCountColumn; j < endCountColumn; j+=incrementColumn){
            if(numbers[i][y].id !== numbers[l][j].id && thisNumber === numbers[l][j].number){
                arr.push(numbers[l][j].id);
            }
        }
    }
    return arr;
}