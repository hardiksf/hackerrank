function minimumBribes(q) {
    let bribe = 0;
    let result = 0;
    let baseArray = [];
    const length = q.length;

    for (let index = 0; index < length; index++) {
        baseArray.push(index + 1);

    }

    for (let index = 0; index < length; index++) {
        if (q[index] > index + 3) {
            result = "Too chaotic";
            break;
        } else {
            while (q[index] !== baseArray[index]) {
                let elementAtIndexToBeMoved = baseArray.indexOf(q[index]);
                let temp = baseArray[elementAtIndexToBeMoved];
                baseArray[elementAtIndexToBeMoved] = baseArray[elementAtIndexToBeMoved - 1];
                baseArray[elementAtIndexToBeMoved - 1] = temp;
                bribe++;
            }
        }
        result = bribe;
    }
    console.log(result);
}

q = [1, 2, 5, 3, 7, 8, 6, 4];
minimumBribes(q);
// 1 2 3 4 5 6 7 8
// 1 2 3 5 4 6 7 8 - 1
// 1 2 5 3 4 6 7 8 - 2
// 1 2 5 3 4 7 6 8 - 3
// 1 2 5 3 7 4 6 8 - 4
// 1 2 5 3 7 4 8 6 - 5
// 1 2 5 3 7 8 4 6 - 6