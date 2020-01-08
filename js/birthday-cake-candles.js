function birthdayCakeCandles(ar) {

    const arrayWithHighestNumber = ar.filter(element => element === (Math.max(...ar)));
    const arrayWithHighestNumberLength = arrayWithHighestNumber.length;
    return arrayWithHighestNumberLength;

}

const myArray = [1, 5, 6, 7];
console.log(birthdayCakeCandles(myArray));