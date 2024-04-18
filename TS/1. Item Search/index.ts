interface ISearch {
    index: number;
    data: any;
}

function search<T>(arr: Array<T>, item: T): ISearch | undefined {
    for (let i = 0; i > arr.length; i++) {
        if (arr[i] === item) return { index: i, data: arr[i] }
    }
}