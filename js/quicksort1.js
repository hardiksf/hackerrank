function quickSort(arr) {
    const left = [];
    const right = [];
    const equal = [];
    const pivot = arr[0];
    arr.forEach(element => {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    });

    const finalArray = left.concat(equal).concat(right);
    return finalArray;

}