function plusMinus(arr) {
    const length = arr.length;
    const plusArray = arr.filter(ele => ele > 0);
    const mimunArray = arr.filter(ele => ele < 0);
    const totalPlusElements = plusArray.length;
    const totalMinusElements = mimunArray.length;
    const totalZeroElements = length - totalPlusElements - totalMinusElements;

    console.log(totalPlusElements / length);
    console.log(totalMinusElements / length);
    console.log(totalZeroElements / length);

}