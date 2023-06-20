export const changeNumber = (numbers, targetId, button, setNumbers) =>{
    const oldNumbers = numbers.map( row =>{
            return row.map(number => {
                if(number.id === targetId){
                    return {...number, number: button}
                }
                    return number
            })
        }
    );
    setNumbers(oldNumbers);
}