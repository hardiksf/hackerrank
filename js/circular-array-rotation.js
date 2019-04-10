function circularArrayRotation(a, k, queries) {
    const aLength = a.length;
    k = k % aLength;
    const rotatedArray = [];
    if (k !== a.length) {
        for (let i = 0; i < aLength; i++) {
            const elementIndexToBePushed = aLength - k + i;
            if (elementIndexToBePushed > a.length - 1) {
                rotatedArray.push(a[elementIndexToBePushed - aLength]);
            } else {
                rotatedArray.push(a[elementIndexToBePushed]);
            }
        }
    } else {
        rotatedArray = a;
    }

    const result = [];
    const queriesLength = queries.length;
    for (let i = 0; i < queriesLength; i++) {
        result.push(rotatedArray[queries[i]]);
    }
    return result;
}

let a = [3, 4, 5];
// 5, 3, 4
//4, 5, 3
let k = 40;
let queries = [1, 2];

circularArrayRotation(a, k, queries);
