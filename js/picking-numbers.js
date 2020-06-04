function pickingNumbers(a) {
    const uniqueNumbers = Array.from(new Set(a));
    let currentArray = [];
    let result = 0;
    for (let index = 0; index < uniqueNumbers.length; index++) {
        a.forEach(element => {
            if ((element === uniqueNumbers[index]) || (element === uniqueNumbers[index] + 1)) {
                currentArray.push(element);
            }
        });
        if (currentArray.length > result) {
            result = currentArray.length;
        }
        currentArray = [];
    }
    return result;
}

const myArray = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(myArray));
