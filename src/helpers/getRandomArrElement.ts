export function getRandomArrElement(array: any[]): any {
    const randomIDX = Math.floor(Math.random() * array.length);
    return array[randomIDX];
}
