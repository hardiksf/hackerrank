// Generating all possible magic squares
function getMagicSquare() {

    const myArray = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5],
    ];

    for (let index1 = 1; index1 < 10; index1++) {
        for (let index2 = 1; index2 < 10; index2++) {
            for (let index3 = 1; index3 < 10; index3++) {
                for (let index4 = 1; index4 < 10; index4++) {
                    for (let index5 = 1; index5 < 10; index5++) {
                        for (let index6 = 1; index6 < 10; index6++) {
                            for (let index7 = 1; index7 < 10; index7++) {
                                for (let index8 = 1; index8 < 10; index8++) {
                                    for (let index9 = 1; index9 < 10; index9++) {
                                    // if numbers are not distinct for each loop, I can break the loop and make it a bit faster
                                    
                                        const mySet = new Set();
                                        mySet.add(index1).add(index2)
                                            .add(index3)
                                            .add(index4)
                                            .add(index5)
                                            .add(index6)
                                            .add(index7)
                                            .add(index8)
                                            .add(index9);
                                        if ((mySet.size === 9))
                                            if (
                                                (index1 + index2 + index3 === index4 + index5 + index6) &&
                                                (index4 + index5 + index6 === index7 + index8 + index9) &&
                                                (index7 + index8 + index9 === index1 + index4 + index7) &&
                                                (index1 + index4 + index7 === index2 + index5 + index8) &&
                                                (index2 + index5 + index8 === index3 + index6 + index9) &&
                                                (index3 + index6 + index9 === index1 + index5 + index9) &&
                                                (index1 + index5 + index9 === index3 + index5 + index7)
                                            ) {
                                                myArray[0][0] = index1;
                                                myArray[0][1] = index2;
                                                myArray[0][2] = index3;
                                                myArray[1][0] = index4;
                                                myArray[1][1] = index5;
                                                myArray[1][2] = index6;
                                                myArray[2][0] = index7;
                                                myArray[2][1] = index8;
                                                myArray[2][2] = index9;

                                                console.log(myArray);

                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// getMagicSquare();

s = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5],
];

function formingMagicSquare(s) {

    // Got all possible magic squares via getMagicSquare() above
    const magicSquares = [
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8],
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8],
        ],
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6],
        ],
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6],
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4],
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4],
        ],
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2],
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2],
        ],
    ];

    let result = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < magicSquares.length; index++) {
        const difference =
            Math.abs(s[0][0] - magicSquares[index][0][0]) +
            Math.abs(s[0][1] - magicSquares[index][0][1]) +
            Math.abs(s[0][2] - magicSquares[index][0][2]) +
            Math.abs(s[1][0] - magicSquares[index][1][0]) +
            Math.abs(s[1][1] - magicSquares[index][1][1]) +
            Math.abs(s[1][2] - magicSquares[index][1][2]) +
            Math.abs(s[2][0] - magicSquares[index][2][0]) +
            Math.abs(s[2][1] - magicSquares[index][2][1]) +
            Math.abs(s[2][2] - magicSquares[index][2][2]);

        if (result > difference) {
            result = difference;
        }
    }
    return result;
}
console.log(formingMagicSquare(s));
