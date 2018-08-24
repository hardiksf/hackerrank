const countFruitsInHome = (startingPoint, endingPoint, locationOfTree, fruits) => {
    const fruitsDistance = [];
    fruits.forEach(element => {
        fruitsDistance.push(element + locationOfTree);
    });

    const favorableFruitsDistance = [];
    fruitsDistance.forEach(element => {
        if (element >= startingPoint && element <= endingPoint) {
            favorableFruitsDistance.push(element);
        }
    });
    console.log(favorableFruitsDistance.length);
};

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    countFruitsInHome(s, t, a, apples);
    countFruitsInHome(s, t, b, oranges);
}
const a = [-2, 2, 1];
const o = [5, -6];
countApplesAndOranges(7, 11, 5, 15, a, o);