function camelcase(s) {
    let counter = 1;
    for (const char of s) {
        if (char === char.toUpperCase()) {
            counter = counter + 1;
        }
    }
    return counter;

}
