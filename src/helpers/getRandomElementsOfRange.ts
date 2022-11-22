export function getRandomElementsOfRange(
    range: number | string[], // range/diapason of generating
    outputCount: number // count of elements in array
): any[] {
    const numbersOfRange: number[] = [];
    const lettersOfRange: string[] = [];

    if (Array.isArray(range)) {
        const [startChar, endChar] = range;

        // convert getted items (letter => unicode)
        let i = startChar.charCodeAt(0);
        const j = endChar.charCodeAt(0);

        for (; i <= j; ++i) {
            // fill arr by reverse converted items (unicode => letter)
            lettersOfRange.push(String.fromCharCode(i));
        }
    } else {
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

        for (let i = minVal; i <= range; i++) {
            // generate including diapason
            numbersOfRange.push(i);
        }
    }

    let result = [];

    result = Array.isArray(range)
        ? [...lettersOfRange].sort(() => (Math.random() > 0.5 ? 1 : -1))
        : [...numbersOfRange].sort(() => (Math.random() > 0.5 ? 1 : -1));

    result.splice(outputCount);

    return result;
}
