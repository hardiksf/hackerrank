function beautifulDays(i, j, k) {
    let count = 0;
    for (let index = i; index <= j; index++) {
        index = index + '';
        const reverseNumber = parseInt(index.split('').reverse()
            .join(''));
        if (Math.abs(reverseNumber - index) % k === 0) {
            count = count + 1;
        }
    }
    return count;
}
