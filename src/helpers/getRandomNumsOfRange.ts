export function getRandomNumsOfRange(
    range: number, // range/diapason of generating
    outputCount: number // count of elements in array
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

    let result = [];

    result = [...numbersOfRange].sort(() => (Math.random() > 0.5 ? 1 : -1));
    result.splice(outputCount);

    return result;
}
