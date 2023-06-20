export const generateWhiteListIds = (difficult) => {
    if (difficult > 0) {
        let count = 80 - difficult;
        const arrIds = [];
        while (count > 0) {
            const randomId = Math.ceil(Math.random() * (80));
            if (!arrIds.includes(randomId)) {
                arrIds.push(randomId);
                count -= 1;
            }
        }
        return arrIds;
    }
}