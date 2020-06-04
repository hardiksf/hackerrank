function flippingBits(N) {
    let binaryNumber = N.toString(2);
    const length = binaryNumber.length;
    if (length < 33) {
        const difference = 32 - length;
        binaryNumber = '0'.repeat(difference) + binaryNumber;
    }

    const flippedBinaryNumber = [];
    for (const character of binaryNumber) {
        character === '0' ? flippedBinaryNumber.push(`1`) : flippedBinaryNumber.push(`0`);
    }

    return parseInt(flippedBinaryNumber.join(''), 2);

}

flippingBits(45454);
