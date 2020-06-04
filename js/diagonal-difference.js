function diagonalDifference(arr) {
    const arrLength = arr.length;
    let sumLeftToRight = 0;
    let sumRightToLeft = 0;
    for (let i = 0; i < arrLength; i = i + 1) {
        sumLeftToRight = sumLeftToRight + arr[i][i];
        sumRightToLeft = sumRightToLeft + arr[i][arrLength - i - 1];
    }

    const difference = sumLeftToRight - sumRightToLeft;
    return Math.abs(difference);

}
