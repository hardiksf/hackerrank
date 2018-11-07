function timeInWords(h, m) {
    let result = ``;
    let hourToText = numToText(h);
    let minuteToText = numToText(m);

    if (m === 0) {
        result = `${hourToText} o' clock`
    } else if (m === 1) {
        result = `one minute past ${hourToText}`;
    } else if (m <= 31) {
        if (m === 15) {
            result = `quarter past ${hourToText}`;
        } else if (m === 30) {
            result = `half past ${hourToText}`;
        } else {
            result = `${minuteToText} minutes past ${hourToText}`;
        }
    } else {
        h = h + 1;
        hourToText = numToText(h);
        if (m === 45) {
            result = `quarter to ${hourToText}`;
        } else {
            m = 60 - m;
            minuteToText = numToText(m);
            if (m === 1) {
                result = `one minute to ${hourToText}`;
            } else {
                result = `${minuteToText} minutes to ${hourToText}`;
            }
        }
    }
    return result;
}

const numToText = number => {
    const numberToWord = [`one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`];
    if (number === 20) {
        return `twenty`;
    }
    if (number === 30) {
        return `thirty`;
    }
    if (number === 40) {
        return 'forty';
    }
    if (number === 50) {
        return `fifty`;
    }
    if (number < 21) {
        return numberToWord[number - 1];
    } else if (number < 30) {
        const lastDigit = numberToWord[number - 21];
        return `twenty ${lastDigit}`;
    } else if (number < 40) {
        const thirty = numToText(30);
        const lastDigit = numberToWord[number - 31];
        return `${thirty} ${lastDigit}`;
    } else if (number < 50) {
        const forty = numToText(40);
        const lastDigit = numberToWord[number - 41];
        return `${forty} ${lastDigit}`;
    } else {
        const fifty = numToText(50);
        const lastDigit = numberToWord[number - 51];
        return `${fifty} ${lastDigit}`;
    }
};

console.log(timeInWords(11, 45));