fib = (n) => {
    let seq = [0,1];

    for (let i = 2; i <= n; i++) {
        let a = seq[i - 1];
        let b = seq[i - 2];

        seq.push(a + b);
    }
    return seq;
}

console.log(fib(7));