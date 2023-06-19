export const mixLastRowGenerate = (index, row) => {
    switch (index) {
        case 0: {
            let startNumber = 0;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 1: {
            let startNumber = 6;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 2: {
            let startNumber = 3;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 3: {
            let startNumber = 1;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 4: {
            let startNumber = 7;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 5: {
            let startNumber = 4;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 6: {
            let startNumber = 2;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 7: {
            let startNumber = 8;
            return row.map(col => {
                startNumber += 1;
                if (startNumber === 10) {
                    startNumber = 1;
                }
                return {...col, number: startNumber}
            })
        }
        case 8: {
            let startNumber = 5;
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