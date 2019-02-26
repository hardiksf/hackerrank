//This solution will work not work for cases like this:
const G3 = [
    '123412',
    '561212',
    '123634'
];
const P3 = ['12', '34'];

// if P[0] occurs more than once in G, this will give the index (row, column) in G for all matches
// this method will give result like this for above array (G3, P3)
// { 0 => [ 0, 4 ], 1 => [ 2, 4 ], 2 => [ 0 ] }
const getMapOfAllP0Matches = (G, P) => {
    const gLength = G.length;
    const pLength = P.length;
    let numberOfMatches = 0;
    const mapOfAllP0Matches = new Map();

    let fromIndex = 0;
    for (let i = 0; i < gLength;) {
        let indexOfP0InG = G[i].indexOf(P[0], fromIndex);

        if (fromIndex > 0 && indexOfP0InG !== -1) {
            const arrayOfCurrentIndex = mapOfAllP0Matches.get(i);
            arrayOfCurrentIndex.push(indexOfP0InG);
            mapOfAllP0Matches.set(i, arrayOfCurrentIndex);
        }
        if (fromIndex === 0 && indexOfP0InG !== -1) {
            mapOfAllP0Matches.set(i, [indexOfP0InG]);

        }
        const previousFromIndex = fromIndex;
        if (mapOfAllP0Matches.has(i)) {
            let numberOfP0MatchesInCurrentRowInG = mapOfAllP0Matches.get(i).length;
            // fromIndex = mapOfAllP0Matches.get(i)[numberOfP0MatchesInCurrentRowInG - 1] + pLength;
            fromIndex++;
            if (fromIndex >= G[0].length || previousFromIndex === fromIndex) {
                fromIndex = 0;
                i++
            }
        } else {
            fromIndex = 0;
            i++
        }
    }
    return mapOfAllP0Matches;
};

const arrayOfAllP0Matches = (map) => {
    const array = [];
    map.forEach((value, key) => {
        const numberItemsInArray = value.length;
        for (let i = 0; i < numberItemsInArray; i++) {
            array.push([key, value[i]]);
        }
    });
    return array;
};

// console.log(`getMapOfAllP0Matches`, arrayOfAllP0Matches(getMapOfAllP0Matches(G3, P3)));

const doesAtLeastOneMatch = (G, P) => {
    const gLength = G.length;
    const pLength = P.length;
    const p0MatchArray = arrayOfAllP0Matches(getMapOfAllP0Matches(G, P));
    const occurrenceOfP0Match = p0MatchArray.length;
    if (occurrenceOfP0Match === 0) {
        return false;
    }
    for (let i = 0; i < occurrenceOfP0Match; i++) {
        for (let j = 0; j < pLength;) {
            const rowNumberOfP0MatchArray = p0MatchArray[i][0];
            const columnNumberOfP0MatchArray = p0MatchArray[i][1];
            // if (G[rowNumberOfP0MatchArray + j + 1].indexOf(P[j + 1]) === columnNumberOfP0MatchArray) {
            if (G[rowNumberOfP0MatchArray + j + 1].substring(columnNumberOfP0MatchArray, columnNumberOfP0MatchArray + pLength + 1) === P[j + 1]) {
                j++;
            } else {
                break;
            }
            if (j === pLength - 1) {
                return true;
            }
        }
        if (i === occurrenceOfP0Match - 1) {
            return false;
        }
    }
};

function gridSearch(G, P) {
    const result = doesAtLeastOneMatch(G, P);
    if (result) {
        return "YES";
    } else {
        return "NO";
    }
}

const G = ['7283455864',
    '6731158619',
    '8988242643',
    '3830589324',
    '2229505813',
    '5633845374',
    '6473530293',
    '7053106601',
    '0834282956',
    '4607924137'
];
const P = ['9505', '3845', '3530'];

const G2 = ['88812',
    '38845',
    '68878',
    '98888',
    '88888'
];

const P2 = ['123',
    '456',
    '789'
];
//result of 2 == NO


const G14 = [
    '456712',
    '561245',
    '123667',
    '781288'
];

const P14 = [
    '45',
    '67'
];

const G2Sample = ['400453592126560',
    '114213133098692',
    '474386082879648',
    '522356951189169',
    '887109450487496',
    '252802633388782',
    '502771484966748',
    '075975207693780',
    '511799789562806',
    '404007454272504',
    '549043809916080',
    '962410809534811',
    '445893523733475',
    '768705303214174',
    '650629270887160'
];
const P2Sample = ['99', '99'];

const G15 = [
    '111111111111111',
    '111111111111111',
    '111111111111111',
    '111111011111111',
    '111111111111111',
    '111111111111111',
    '101010101010101'
];

const P15 = [
    '11111',
    '11111',
    '11111',
    '11110'
];

console.log(gridSearch(G15, P15));