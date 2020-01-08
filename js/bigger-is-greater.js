function biggerIsGreater(w) {
    /*
     * Start looking from last character and compare it with previous character...
     * if previous character is same or greater and if iteration finish ==> no answer
     * else re-arrange last portion of string from where(get index here) previous character is small
     */

    if (w.length === 1) {
        return `no answer`;
    }

    // find desiredInitialPart and modifyThisPart
    let desiredInitialPart = ``;
    let modifyThisPart = ``;
    let startModificationFrom = ``;
    for (let i = w.length - 1; i >= 0; i--) {
        if (w.charAt(i - 1) < w.charAt(i)) {
            desiredInitialPart = w.slice(0, i - 1);
            modifyThisPart = w.slice(i - 1);
            startModificationFrom = w.charAt(i - 1);
            break;
        }
    }

    // find first character after desired part
    let smallestCharacter = ``;
    const modifyThisPartLength = modifyThisPart.length;
    // Starting from 1 as we need character bigger than character at 0
    for (let i = 1; i < modifyThisPartLength; i++) {
        const currentCharacter = modifyThisPart.charAt(i);
        if (currentCharacter > startModificationFrom) {
            if (smallestCharacter === `` || currentCharacter < smallestCharacter) {
                smallestCharacter = currentCharacter;
            }
        }
    }

    if (smallestCharacter === ``) {
        return `no answer`;
    }

    // appends next character
    desiredInitialPart = desiredInitialPart + smallestCharacter;

    const indexOfSmallestCharacter = modifyThisPart.indexOf(smallestCharacter);

    // modifyThisPart without character which was appended above  
    modifyThisPart = modifyThisPart.slice(0, indexOfSmallestCharacter) + modifyThisPart.slice(indexOfSmallestCharacter + 1);
    console.log(modifyThisPart);

    // sort remaining characters
    const modifiedLaterPart = modifyThisPart.split(``).sort()
        .join(``);

    // append remaining string
    return desiredInitialPart + modifiedLaterPart;

}
// const w = "bcda";
const w = 'zzzayybbaa';
//         zzzbaaabyy
console.log(modifiedLaterPart);
console.log(biggerIsGreater(w));