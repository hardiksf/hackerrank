
function extraLongFactorials(n) {
    let result = BigInt(1);

    while (n > 0) {
        result = result * BigInt(n);
        n--;
    }

    return result.toString();
}

console.log(extraLongFactorials(25));
