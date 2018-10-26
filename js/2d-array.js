function hourglassSum(arr) {

    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < arr.length - 2; index++) {
        for (let column = 0; column < 4; column++) {
            let sum = 0;
            sum = arr[index][column] + arr[index][column + 1] + arr[index][column + 2] +
                arr[index + 1][column + 1] +
                arr[index + 2][column] + arr[index + 2][column + 1] + arr[index + 2][column + 2];

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}