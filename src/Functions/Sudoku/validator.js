export const validator = (numbers, secondNumbers, y, mathPlus, mathMinus) => {
    const arr = [];
    for (let i = 0; i < 9; i++) {
        if (!arr?.includes(numbers[i]?.id) && numbers[y]?.number === numbers[i]?.number && numbers[y]?.id !== numbers[i]?.id) {
            arr.push(numbers[i]?.id);
        }
    }
    if (numbers[y]?.number === secondNumbers[y + mathPlus]?.number) {
        arr.push(secondNumbers[y + mathPlus]?.id);
    }
    if (numbers[y].number === secondNumbers[y - mathMinus]?.number) {
        arr.push(secondNumbers[y - mathMinus]?.id)
    }

    if (numbers[y]?.number === secondNumbers[y]?.number) {
        arr.push(secondNumbers[y]?.id)
    }
    if (arr.length > 0) {
        arr.push(numbers[y].id);
    }
    return arr;
}