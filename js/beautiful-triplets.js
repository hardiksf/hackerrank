function beautifulTriplets(d, arr) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr.includes(arr[index] + d)) {
            let indexOfSecond = arr.indexOf(arr[index] + d)
            if (arr.includes(arr[indexOfSecond] + d)) {
                count = count + 1;
            }
        }
    }
    return count;
}