
export const fillStatus = (setStatus, numbers, number) =>{
    setStatus(0);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < 9; j++) {
            if (numbers[i][j].number === number) {
                setStatus(prevState => prevState + 1);
            }
        }
    }
}