function makeAnagram(a, b) {
    const aArray = a.split('');
    const bArray = b.split('');
    const aMap = new Map();
    const bMap = new Map();
    const aLength = aArray.length;
    const bLength = bArray.length;

    for (let index = 0; index < aLength; index++) {
        const currentCharacter = aArray[index];
        if (aMap.has(currentCharacter)) {
            let valueOfCurrentCharacter = aMap.get(currentCharacter);
            aMap.set(currentCharacter, valueOfCurrentCharacter += 1);
        } else {
            aMap.set(currentCharacter, 1);
        }

    }

    for (let index = 0; index < bLength; index++) {
        const currentCharacter = bArray[index];
        if (bMap.has(currentCharacter)) {
            let valueOfCurrentCharacter = bMap.get(currentCharacter);
            bMap.set(currentCharacter, valueOfCurrentCharacter += 1);
        } else {
            bMap.set(currentCharacter, 1);
        }
    }

    let numberOfCommonCharactersInBoth = 0;
    for (let i = 97; i <= 122; i++) {
        const currentCharacter = String.fromCharCode(i);
        if (aMap.has(currentCharacter) && bMap.has(currentCharacter)) {
            numberOfCommonCharactersInBoth = numberOfCommonCharactersInBoth + Math.min(aMap.get(currentCharacter), bMap.get(currentCharacter));
        }
    }

    return aLength + bLength - 2 * numberOfCommonCharactersInBoth;
}
const a = 'abcaa';
const b = 'abcd';
makeAnagram(a, b);