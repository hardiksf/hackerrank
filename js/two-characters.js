function consecutiveAlternate(s) {

    let max = 0;
    let counter = 0;
    let myString = "";
    let doesStringHasAlternativeCharacter = false;
    let uniqueCharacters = "";

    for (const character of s) {
        if (!uniqueCharacters.includes(character)) {
            uniqueCharacters = uniqueCharacters + character;
        }
    }

    for (let i = 0; i < uniqueCharacters.length; i++) {

        for (let j = i + 1; j < uniqueCharacters.length - i; j++) {
            if (s.includes(uniqueCharacters.charAt(i)) && s.includes(uniqueCharacters.charAt(j))) {
                for (const char of s) {

                    if (char === uniqueCharacters.charAt(i) || char === uniqueCharacters.charAt(j)) {
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
                    console.log(myString);
                    max = counter;
                }
                counter = 0;
                doesStringHasAlternativeCharacter = false;
                myString = "";
            }
            myString = "";
        }

    }
    console.log(max);

    return max;
}
//result - 6
consecutiveAlternate("pvmaigytciycvjdhovwiouxxylkxjjyzrcdrbmokyqvsradegswrezhtdyrsyhg");

//test case 19 - 6 is the result
// consecutiveAlternate("czoczkotespkfjnkbgpfnmtgqhorrzdppcebyybhlcsplqcqogqaszjgorlsrppinhgpaweydclepyftywafupqsjrbkqakpy");