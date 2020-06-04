const result = (A) => {
    for (let i = 0; i < A.length; i++) {
        const value = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > value) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = value;
        console.log(A);
    }
};
const A = [4, 1, 3, 5, 6, 2];
result(A);
