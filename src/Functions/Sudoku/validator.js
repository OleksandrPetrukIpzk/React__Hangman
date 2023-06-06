export const validator = (numbers, thisNumber, secondNumbers, y, mathPlus, mathMinus) => {
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!arr?.includes(numbers[i]?.id) && thisNumber === numbers[i]?.number && numbers[y]?.id !== numbers[i]?.id) {
            arr.push(numbers[i]?.id);
        }
    }
    if (thisNumber === secondNumbers[y + mathPlus]?.number) {
        arr.push(secondNumbers[y + mathPlus]?.id);
    }
    if (thisNumber === secondNumbers[y - mathMinus]?.number) {
        arr.push(secondNumbers[y - mathMinus]?.id)
    }

    if (thisNumber === secondNumbers[y]?.number) {
        arr.push(secondNumbers[y]?.id)
    }
    if (arr.length > 0) {
        arr.push(numbers[y].id);
    }
    return arr;
}