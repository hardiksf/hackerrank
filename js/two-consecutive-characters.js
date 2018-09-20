function consecutiveAlternate(s) {

    let max = 0;
    let counter = 0;
    let myString = "";
    let doesStringHasAlternativeCharacter = false;
    for (let i = 97; i < 122; i++) {
        if (s.includes(String.fromCharCode(i)) && s.includes(String.fromCharCode(i + 1))) {
            for (const char of s) {

                if (char === String.fromCharCode(i) || char === String.fromCharCode(i + 1)) {
                    myString = myString + char;
                }
            }
            if (myString.length > 1) {
                {
                    let evenCharacterString = "";
                    let oddCharacterSting = "";

                    for (let index = 0; index < myString.length; index++) {
                        if (index % 2 === 0) {
                            oddCharacterSting = oddCharacterSting + myString.charAt(index);
                        } else {
                            evenCharacterString = evenCharacterString + myString.charAt(index);
                        }
                    }

                    if (!evenCharacterString.includes(myString.charAt(0)) && !oddCharacterSting.includes(myString.charAt(1))) {
                        doesStringHasAlternativeCharacter = true;
                    } else {
                        doesStringHasAlternativeCharacter = false;
                    }
                }
            }
        }
        if (doesStringHasAlternativeCharacter) {
            counter = myString.length;
            if (counter > max) {
                max = counter;
            }
            counter = 0;
            doesStringHasAlternativeCharacter = false;
            myString = "";
        }
    }
    return max;
}
consecutiveAlternate("pvmaigytciycvjdhovwiouxxylkxjjyzrcdrbmokyqvsradegswrezhtdyrsyhg");