export const generatePrompt = (numbers, setNumbers, targetId) =>{
    const promptNumbers = numbers.map(row => {
        return row.map(number => {
            if (number.id === targetId) {
                const randomNumber = Math.ceil(Math.random() * (8 + 1));
                if (!row.includes(num => num === randomNumber)) {
                    return {...number, number: randomNumber}
                }
            }
            return number
        })
    })
    setNumbers(promptNumbers);
}