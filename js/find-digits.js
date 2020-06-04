function findDigits(n) {
    let count = 0;
    const numToString = n.toString();
    for (let index = 0; index < numToString.length; index++) {
        const eachDigit = parseInt(numToString.charAt(index));

        if (eachDigit !== 0 && n % eachDigit === 0) {
            count = count + 1;
        }

    }
    return count;
}

// integer to string
const numToString = n.toString();

// String to integer
const num = parseInt(string);

// iterate over each character in string
for (let index = 0; index < numToString.length; index++) {
    const eachDigit = parseInt(numToString.charAt(index));
    // Do something
}
