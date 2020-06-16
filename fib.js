const cache = Array(1478).fill(0);

// function fib(n) {
//     if (n <= 1) return n;
//     if (cache[n] == 0) cache[n] = fib(n - 1) + fib(n - 2);
//     return cache[n];
// }

function fibDynamic(n) {
    const Fib = [n + 1];
    Fib[0] = 0;
    Fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        Fib[i] = Fib[i - 1] + Fib[i - 2];
    }

    return Fib[n];
}

(function main() {
    for (let n = 1; n < 1478; n++) {
        const result = fibDynamic(n);
        console.log(`fib(${n}) = ${result};`);
    }

    return 0;
}());