function repeatedString(s, n) {
    let count = 0;
    const stringLength = s.length;
    const reminder = n % stringLength;
    console.log(`reminder`, reminder);

    const sub = s.substring(0, reminder);
    const numberOfTimesAInSubString = sub.split('').filter(element => element === 'a').length;
    count = numberOfTimesAInSubString;

    console.log(`sub`, sub);

    if (n > stringLength) {
        const numberOfCompleteString = Math.floor(n / stringLength);
        console.log(numberOfCompleteString);

        const numberOfTimesAInString = s.split('').filter(element => element === 'a').length;
        console.log(numberOfTimesAInString);

        count = count + (numberOfCompleteString * numberOfTimesAInString);
        console.log(`count`, count);
    }

    return count;

}

repeatedString('abc', 1);
