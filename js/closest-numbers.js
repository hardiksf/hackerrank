function closestNumbers(arr) {

    let minDifference = Number.MAX_SAFE_INTEGER;

    arr.sort((a, b) => a - b);

    const result = [];

    for (let index = 1; index < arr.length; index++) {
        if ((arr[index] - arr[index - 1]) < minDifference) {
            minDifference = arr[index] - arr[index - 1];
        }
    }

    for (let index = 1; index < arr.length; index++) {
        if ((arr[index] - arr[index - 1]) === minDifference) {
            result.push(arr[index], arr[index - 1]);
        }
    }

    return result.sort((a, b) => a - b);
}

closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]);