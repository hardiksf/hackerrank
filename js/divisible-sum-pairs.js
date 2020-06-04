function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let index = 0; index < ar.length; index++) {
        console.log(`ar[index]`, ar[index]);
        for (let innerIndex = index + 1; innerIndex < ar.length; innerIndex++) {
            if ((ar[index] + ar[innerIndex]) % k === 0) {
                count = count + 1;
            }
        }

    }
    return count;

}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(n, k, ar));
