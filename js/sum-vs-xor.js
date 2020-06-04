// one for loop solution
function sumXor(n) {
    let counter = 0;
    for (let i = 0; i < n + 1; i++) {
        if ((n + i) === (n ^ i)) {
            counter++;
        }
    }
    return counter;
}

// more optimal solution
function sumXor2(n) {
    let counter = 0;
    while (n !== 0) {
        if (n % 2 === 0) {
            counter++;
        }
        n = Math.floor(n / 2);
    }
    return Math.pow(2, counter);
}
/*
 * from https://www.hackerrank.com/challenges/sum-vs-xor/forum
 * xor simulates binary addition without the carry over to the next digit. For the zero digits of n you can either add a 1 or 0 without getting a carry which implies xor = + whereas if a digit in n is 1 then the matching digit in x is forced to be 0 on order to avoid carry. For each 0 in n in the matching digit in x can either being a 1 or 0 with a total combination count of 2^(num of zero).
 */

console.log(sumXor2(10));
