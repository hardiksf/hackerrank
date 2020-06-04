function miniMaxSum(arr) {

    const sum = arr.reduce((a, b) => a + b);
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);
    console.log(min, max);

}

myArray = [1, 2, 3, 4, 5];
miniMaxSum(myArray);
