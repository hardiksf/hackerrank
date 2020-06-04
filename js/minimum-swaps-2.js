function minimumSwaps(arr) {

    let count = 0;
    const length = arr.length;
    for (let index = 0; index < length; index++) {
        if (arr[index] !== index + 1) {
            [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
            count = count + 1;
        }
    }
    return count;
}
