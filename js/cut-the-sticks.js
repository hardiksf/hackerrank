function cutTheSticks(arr) {
    arr.sort();
    const result = [arr.length]
    console.log(arr.length);
    let min = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === min) {} else {
            console.log(arr.length - index);
            result.push(arr.length - index);
            min = arr[index];
        }
    }
    return result;
}









const myArray = [5, 4, 4, 2, 2, 8];
(cutTheSticks(myArray));