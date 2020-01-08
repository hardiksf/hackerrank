function roadsAndLibraries(n, c_lib, c_road, cities) {

    if (c_road > c_lib) {
        return n * c_lib;
    } else {
        let numberOfRoads = 0;
        let numberOfLibraries = 1;
        for (let index = 1; index < n; index++) {
            let foundAdjacentCity = false;
            for (let j = 0; j < cities.length; j++) {
                if (cities[j].includes(index)) {
                    if (cities[j].includes(index + 1)) {
                        numberOfRoads += 1;
                        foundAdjacentCity = true;
                        break;
                    }
                }

            }
            if (!foundAdjacentCity) {
                numberOfLibraries += 1;
            }
        }
        return numberOfRoads * c_road + numberOfLibraries + c_lib;
    }

}

const n = 5;
const c_lib = 6;
const c_road = 1;
const cities = [
    [1, 2],
    [1, 3],
    [1, 4],
];
console.log(roadsAndLibraries(n, c_lib, c_road, cities));