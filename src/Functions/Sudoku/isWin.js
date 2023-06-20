export const isWin = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < 9; j++) {
            if (numbers[i][j].number === '') {
                return false
            }
        }
    }
    return true;
}