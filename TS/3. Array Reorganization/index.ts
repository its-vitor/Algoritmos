interface IScissors {
    arr1: Array<number>;
    arr2: Array<number>
}

function scissors(arr: Array<number>): IScissors {
    const index = Math.floor(arr.length / 2);
    return { arr1: arr.slice(0, index), arr2: arr.slice(index, arr.length) }
}

function list(arr: Array<number>): Array<number> {
    arr.sort((a, b) => a - b)
    return arr;
}

function insertSort(values: Array<number>, arr: Array<number> = []): Array<number> {
    for (const value of values) {
        if (!arr.includes(value)) arr.push(value)
    }

    let { arr1, arr2 } = scissors(arr);
    arr1 = list(arr1);
    arr2 = list(arr2);

    const mergedArr = [...arr1, ...arr2];
    mergedArr.sort((a, b) => a - b);

    return mergedArr;
}

console.log(insertSort([1, 2, 3], [4, 5, 6]))