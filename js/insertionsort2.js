function insertionSort2(n, arr) {
    for (let i = 0; i < n - 1; i++) {
        let j = i;
        while (arr[j] > arr[j + 1] && j >= 0) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            j--;
        }
        console.log(...arr);
    }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
