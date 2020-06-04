function simpleArraySum(ar) {
    return ar.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
}

console.log(simpleArraySum([0, 1, 2, 3]));
