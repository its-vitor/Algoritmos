function itsPrime(n: number): Boolean {
    if (n < 0) n = Math.abs(n);

    for (let i = 2; i <= n; i++) {
        if (!(n % i) && n !== i) return false
    }

    return true
}

console.log(itsPrime(2))