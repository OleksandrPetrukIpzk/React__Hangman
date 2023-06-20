export const mixGenerate = (zeroNumber, firstNumber, twoNumber, thirdNumber, fourNumber, fiveNumber, sixNumber, sevenNumber, eightNumber, index, row) => {
    switch (index) {
        case 0: {
            let startNumber = zeroNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 1: {
            let startNumber = firstNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 2: {
            let startNumber = twoNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 3: {
            let startNumber = thirdNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 4: {
            let startNumber = fourNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 5: {
            let startNumber = fiveNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 6: {
            let startNumber = sixNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 7: {
            let startNumber = sevenNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 8: {
            let startNumber = eightNumber;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        default:
            break
    }
}