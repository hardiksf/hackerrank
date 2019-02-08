function beautifulPairs(A, B) {
    const aLength = A.length;
    const bLength = B.length;
    let counter = 0;
    for (let i = 0; i < aLength; i++) {
        if (B.indexOf(A[i]) !== -1) {
            B.splice(B.indexOf(A[i]), 1);
            counter++;
        }
    }

    if (aLength === bLength && B.length === 0) {
        counter = counter - 1;
    } else if (counter < (Math.min(aLength, bLength))) {
        counter = counter + 1;
    }

    return counter;
}

const A = [1, 2, 3];
const B = [1, 2, 3, 4];

// 3 5 7 11 5 8
// 5 7 11 10 5 8

console.log(beautifulPairs(A, B));