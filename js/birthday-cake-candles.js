function birthdayCakeCandles(ar) {

    const arrayWithHighestNumber = ar.filter(element => element === (Math.max(...ar)));
    const arrayWithHighestNumberLength = arrayWithHighestNumber.length;
    return arrayWithHighestNumberLength;

}




let myArray = [1, 5, 6, 7];
console.log(birthdayCakeCandles(myArray));