function getMoneySpent2(keyboards, drives, b) {
    const mySet = new Set;
    let sortedArray = [];
    for (let index = 0; index < keyboards.length; index++) {
        for (let indexDrives = 0; indexDrives < drives.length; indexDrives++) {
            mySet.add(keyboards[index] + drives[indexDrives]);
            const myArray = Array.from(mySet);
            sortedArray = myArray.sort((a, b) => b - a);
        }

    }
    let result = -1;
    if (sortedArray[sortedArray.length - 1] > b) {
        return -1;
    }
    for (let index = 0; index < sortedArray.length; index++) {
        // console.log(sortedArray[index]);
        if (sortedArray[index] <= b) {
            result = sortedArray[index];
            break;
        }

    }
    return result;

}

function getMoneySpent(keyboards, drives, b) {
    let result = -1;
    keyboards.forEach(element => {
        let value = 0;
        for (let index = 0; index < drives.length; index++) {
            value = element + drives[index];
            if (value <= b && value > result) {
                result = value;
            }
        }
    });
    return result;
}

/*
 * 10 2 3
 *  3 1
 *  5 2 8
 */

keyboards = [3, 1];
drives = [5, 2, 8];
b = 10;

console.log(getMoneySpent(keyboards, drives, b));