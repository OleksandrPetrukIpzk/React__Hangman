export    const hasSimilarElements = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].number === array[j].number && array[i].number !== '') {
                return true;
            }
        }
    }
    return false;
}