export function getRandomNumOfRange(
    range: number,
    outputCount: number
): number[] {
    const arr = [];
    for (let i = 0; i <= range; i++) {
        arr.push(i);
    }

    const result = [];

    for (let i = 0; i < outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }

    return result;
}
