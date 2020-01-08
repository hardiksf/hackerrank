function gameOfThrones(s) {
    const stringLength = s.length;
    let result = 'NO';

    // if length more than 1
    if (stringLength > 1) {

        // get unique characters, count each chara and put it in array
        const uniqueCharacters = String.prototype.concat(...new Set(s));
        const uniqueCharactersArray = Array.from(Array(uniqueCharacters.length), () => 0);

        // Array of characters being repeated
        for (let index = 0; index < s.length; index++) {
            uniqueCharactersArray[uniqueCharacters.indexOf(s.charAt(index))] = uniqueCharactersArray[uniqueCharacters.indexOf(s.charAt(index))] + 1;
        }
        console.log(uniqueCharactersArray);

        // if even, all characters should be in pair
        if (stringLength % 2 === 0) {
            // check array to see each number is even
            if (uniqueCharactersArray.every(element => element % 2 === 0)) {
                result = 'YES';
            }
            // if odd, all except one characters should be in pair
        } else {
            let numberOfCharactersNotInPara = 0;
            for (let index = 0; index < uniqueCharactersArray.length; index++) {
                if (uniqueCharactersArray[index] % 2 !== 0)
                    numberOfCharactersNotInPara = numberOfCharactersNotInPara + 1;
            }
            if (numberOfCharactersNotInPara === 1) {
                result = 'YES';
            }
        }

    }
    return result;

}
console.log(gameOfThrones('abbcbcddaaaa'));