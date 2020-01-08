function prepareMap(string) {
    const wordsInString = string.toString().split(' ');
    const map = new Map();

    for (let index = 0; index < wordsInString.length; index++) {
        const currentWord = wordsInString[index];
        if (map.has(currentWord)) {
            let currentWordsValue = map.get(currentWord);
            map.set(currentWord, currentWordsValue += currentWordsValue);
        } else {
            map.set(currentWord, 1);
        }
    }
    return map;
}

function checkMagazine(magazine, note) {
    let result = 'YES';
    const magazineMap = prepareMap(magazine);
    const noteMap = prepareMap(note);

    for (const [key, value] of noteMap) {
        if (magazineMap.get(key) === undefined) {
            result = 'NO';
            break;
        } else {
            if (value > magazineMap.get(key)) {
                result = 'NO';
                break;
            }
        }
    }

    if (result === 'YES') {
        return 'Yes';
    } else {
        return 'No';
    }
}

const conceptCodeToNameMap = new Map();
conceptCodeToNameMap.set('WS', 'Williams Sonoma')
    .set('WE', 'West Elm')
    .set('PB', 'Pottery Barn')
    .set('PK', 'Pottery Barn Kids');

const magazine = 'give me one grand today night';
const note = 'give one grand today';
console.log(checkMagazine(magazine, note));