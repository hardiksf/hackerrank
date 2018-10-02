function stringConstruction(s) {
    const uniqueCharacters = String.prototype.concat(...new Set(s));
    return uniqueCharacters.length;
}