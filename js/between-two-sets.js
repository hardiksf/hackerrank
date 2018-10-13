function getTotalX(a, b) {
    let count = 0;
    const maxInA = Math.max(...a);
    const minInB = Math.min(...b);
    let isNumberGoodInA = false;
    const goodNumbersInA = [];

    for (let index = maxInA; index <= minInB; index = index + maxInA) {
        for (let i = 0; i < a.length; i++) {
            if (index % a[i] !== 0) {;
                isNumberGoodInA = false
                break;
            } else {
                isNumberGoodInA = true;
            }
        }
        if (isNumberGoodInA) {
            goodNumbersInA.push(index);
        }
    }

    let isNumberGoodInB = false;
    for (let index = 0; index < goodNumbersInA.length; index++) {
        for (let j = 0; j < b.length; j++) {
            if (b[j] % goodNumbersInA[index] !== 0) {
                isNumberGoodInB = false;
                break;
            } else {
                isNumberGoodInB = true;
            }
        }

        if (isNumberGoodInB) {
            count = count + 1;
        }
    }
    return count;
}

console.log(getTotalX([2, 4], [16, 32, 96]));