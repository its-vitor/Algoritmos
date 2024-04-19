// 1. Solution: Set
// 2. Solution: Map

function seekSingle(numbers: Array<number>): Array<number> {
    const numberCounts = new Map<number, number>();

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        if (numberCounts.has(currentNumber)) {
            const currentCount = numberCounts.get(currentNumber) ?? 0;
            numberCounts.set(currentNumber, currentCount + 1);
        } else {
            numberCounts.set(currentNumber, 1);
        }
    }

    return Array.from(numberCounts.entries())
        .filter(([number, count]) => count === 1)
        .map(([number, _]) => number);
}

console.log(seekSingle([1, 2, 2, 3, 3, 4, 4]));
