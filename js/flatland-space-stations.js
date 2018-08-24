//Test case # 15 failed due to timeout
function flatlandSpaceStations2(n, c) {
    const minDistanceFromEachCity = [];
    for (let i = 0; i < n; i++) {
        const distanceArray = c.map(element => Math.abs(element - i));
        minDistanceFromEachCity.push(Math.min(...distanceArray));
    }
    return Math.max(...minDistanceFromEachCity);
}






const n = 5;
const c = [0, 4];
console.log(flatlandSpaceStations(n, c));

// const n = 6;
// const c = [0, 1, 2, 4, 3, 5];
// console.log(flatlandSpaceStations(n, c));

// const n = 16;
// const c = [9, 11];
// flatlandSpaceStations(n, c);