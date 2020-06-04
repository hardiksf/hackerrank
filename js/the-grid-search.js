// This solution will work not work for cases like this:
const G3 = [
    '123412',
    '561212',
    '123634',
];
const P3 = ['12', '34'];

function gridSearch(G, P) {
    let result = 'NO';
    const gLength = G.length;
    const pLength = P.length;
    for (let i = 0; i < gLength; i++) {
        const indexOfP0InG = G[i].indexOf(P[0]);
        if (indexOfP0InG > -1) {
            console.log(i, indexOfP0InG);
            for (let j = 1; j < pLength;) {
                const indexOfNextRowOfPAtNextRowOfG = G[i + j].indexOf(P[j]);
                if (indexOfNextRowOfPAtNextRowOfG === indexOfP0InG) {
                    j++;
                } else {
                    return result;
                }
                // successful match of last row of P
                if (j === pLength) {
                    result = 'YES';
                    return result;
                }
            }
        }
    }
    return result;
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
    '4607924137',
];
const P = ['9505', '3845', '3530'];

const G2 = ['88812',
    '38845',
    '68878',
    '98888',
    '88888',
];

const P2 = ['123',
    '456',
    '789',
];
// result of 2 == NO

console.log(gridSearch(G3, P3));
