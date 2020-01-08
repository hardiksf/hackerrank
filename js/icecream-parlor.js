function icecreamParlor(m, arr) {
    const result = [];

    for (let index = 0; index < arr.length; index++) {
        for (let index2 = index + 1; index2 <= arr.length - 1; index2++) {
            if (arr[index] + arr[index2] === m) {
                result.push(index + 1, index2 + 1);
            }

        }

    }
    return result.sort((a, b) => a - b);

}
// console.log(icecreamParlor(4, [1, 4, 5, 3, 2]));

console.log(icecreamParlor(8, [1, 3, 4, 4, 6, 8]));
// console.log(icecreamParlor(3, [1, 2]));