//Test case # 15 failed due to timeout
function flatlandSpaceStations(n, c) {
    let maxDistanceFromEachCity = 0;
    for (let i = 0; i < n; i++) {
        const distanceArray = c.map(element => Math.abs(element - i));
        let minDistanceFromEachCity = Math.min(...distanceArray);
        if (minDistanceFromEachCity > maxDistanceFromEachCity) {
            maxDistanceFromEachCity = minDistanceFromEachCity;
        }
    }
    return maxDistanceFromEachCity;;
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