function twoStrings(s1, s2) {
    const uniqueCharactersInS1 = String.prototype.concat(...new Set(s1));
    let result = 'NO';
    for (let index = 0; index < uniqueCharactersInS1.length; index++) {
        for (let j = 0; j < s2.length; j++) {
            if (uniqueCharactersInS1.charAt(index) === s2.charAt(j)) {
                result = 'YES';
                break;
            }
        }
    }
    return result;
}

console.log(twoStrings('hello', 'World'));