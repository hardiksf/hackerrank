function alternatingCharacters(s) {
    const stringLength = s.length;
    let counter = 0;
    for (let i = 1; i < stringLength; i++) {
        if (s.charAt(i) === s.charAt(i - 1)) {
            counter = counter + 1;
        }
    }
    return counter;
}
const s = 'ABABABAB';

console.log(alternatingCharacters(s));
