function cutTheSticks(arr) {
    arr.sort((a, b) => {
        return a - b; 
    });
    const length = arr.length;
    const result = [length];
    while (arr.length > 1) {

        // let count = 1;
        const firstElement = arr.shift();
        if (arr[0] === firstElement) {
            // count++;
            arr.shift();
        } if (arr[0] !== firstElement && arr.length !== 0) {
            result.push(arr.length);
        }
    }
    return result;
}

// const myArray = [];
const myArray = [5, 4, 4, 2, 2, 8];
const myArray2 = [1, 2, 3, 4, 3, 3, 2, 1];
const myArray3 = [1, 13, 3, 8, 14, 9, 4, 4];
const myArray4 = [8, 8, 14, 10, 3, 5, 14, 12];

console.log(cutTheSticks(myArray));
console.log(cutTheSticks(myArray2));
console.log(cutTheSticks(myArray3));
console.log(cutTheSticks(myArray4));
