export function compareObjByKey(
    array1: any[],
    array2: any[],
    keyProp: string
): any {
    if (array1.length !== array2.length) {
        return false;
    }

    const valuesCollection_1 = array1.map(item => item[keyProp]);
    const valuesCollection_2 = array2.map(item => item[keyProp]);

    return valuesCollection_1.join(',') === valuesCollection_2.join(',');
}
