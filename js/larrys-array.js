function larrysArray(A) {
    let smallestUnsortedElement = Math.min(...A);
    const length = A.length;
    for (let i = 0; i < length;) {
        if (A[i] !== smallestUnsortedElement) {
            const indexOfIPlusOne = A.indexOf(i + 1);
            if (indexOfIPlusOne < i + 3) {
                [A[i], A[i + 1], A[i + 2]] = [A[i + 1], A[i + 2], A[i]];
                if (A.length !== length) {
                    return `NO`;
                }
            }
            if (indexOfIPlusOne >= i + 3) {
                [A[indexOfIPlusOne - 2], A[indexOfIPlusOne - 1], A[indexOfIPlusOne]] = [A[indexOfIPlusOne - 1], A[indexOfIPlusOne], A[indexOfIPlusOne - 2]];
                if (A.length !== length) {
                    return `NO`;
                }
            }
        } else {
            i++;
            smallestUnsortedElement++;
        }
    }
    return `YES`;
}

A = [17, 21, 2, 1, 16, 9, 12, 11, 6, 18, 20, 7, 14, 8, 19, 10, 3, 4, 13, 5, 15];
console.log(larrysArray(A));
