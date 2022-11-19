export function getRandomNumOfRange(
    range: number,
    outputCount: number
): number[] {
    let minVal = 0;

    // handle start/initial value for generated [] including diapason
    if (range >= 1 && range <= 9) {
        minVal = 1;
    }
    if (range >= 10 && range <= 19) {
        minVal = 10;
    }
    if (range >= 20 && range <= 50) {
        minVal = 20;
    }
    if (range >= 51 && range <= 99) {
        minVal = 51;
    }
    if (range >= 100 && range <= 999) {
        minVal = 100;
    }

    const numbersOfRange = [];
    for (let i = minVal; i <= range; i++) {
        // generate including diapason
        numbersOfRange.push(i);
    }

    const result = [];

    for (let i = 0; i < outputCount; i++) {
        // generate including diapason, limit items in out []
        const randomIDX = Math.floor(Math.random() * numbersOfRange.length);
        result.push(numbersOfRange[randomIDX]);
        numbersOfRange[randomIDX] = numbersOfRange[range - i];
    }

    return result;
}
