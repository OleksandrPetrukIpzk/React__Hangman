export const generateRandomNumber = (arr, num) =>{
    if (Math.ceil(Math.random() * 8) > 7) {
        let randomNum = Math.ceil(Math.random() * (8 + 1));
        if (arr.findIndex(element => element === randomNum) !== -1) {
            let isRepeat = true;
            while (isRepeat) {
                randomNum = Math.ceil(Math.random() * (8 + 1));
                if (arr.findIndex(element => element === randomNum) === -1) {
                    isRepeat = false;
                }
            }
        }
        arr.push(randomNum);
        return {...num, number: randomNum}
    } else {
        return num;
    }
}