function migratoryBirds(ar) {
    let myMap = new Map;
    for (const iterator of ar) {
        if (myMap.has(iterator)) {
            myMap.set(iterator, myMap.get(iterator) + 1);
        } else {
            myMap.set(iterator, 1);
        }
    }
    let maxOccurance = 0;
    let numbersWithMaxOccurance = [];
    console.log(myMap);
    for (const [key, value] of myMap) {
        if (value > maxOccurance) {
            maxOccurance = value;
        }
    }
    for (const [key, value] of myMap) {
        if (value === maxOccurance) {
            numbersWithMaxOccurance.push(key);
        }
    }
    return Math.min(...numbersWithMaxOccurance);
}




// const myArray = [5, 4, 4, 1, 5, 3, 1];
const myArray = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(myArray));