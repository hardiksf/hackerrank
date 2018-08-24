//This failes due to timeout
function squares(a, b) {
    let count = 0;
    for (let num = a; num <= b; num++) {
        if (Number.isInteger(Math.sqrt(num))) {
            count = count + 1;
        }
    }
    return count;
}

//This is is faster
function squares(a, b) {
    let count = 0;
    let sqrtFloorOfA = Math.floor(Math.sqrt(a));
    let square = Math.pow(sqrtFloorOfA, 2);
    console.log(square);
    while (square <= b) {
        if (square < a) {
            sqrtFloorOfA = sqrtFloorOfA + 1;
            square = Math.pow(sqrtFloorOfA, 2);
        }
        if (square >= a && square <= b) {
            count = count + 1;
            sqrtFloorOfA = sqrtFloorOfA + 1;
            square = Math.pow(sqrtFloorOfA, 2);
        }
    }

    return count;
}