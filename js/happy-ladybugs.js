function happyLadybugs(b) {
    let result = `YES`;

    //if not at least two of each - NO
    const bCharArray = b.split('');
    let map = new Map();

    for (let index = 0; index < bCharArray.length; index++) {
        if ((b[index]) !== `_`) {
            if (map.has(b[index])) {
                map.set(b[index], map.get(b[index]) + 1);
            } else {
                map.set(b[index], 1);
            }
        }
    }

    let mapIterator = map.values();
    for (let index = 0; index < map.size; index++) {
        if (mapIterator.next().value < 2) {
            result = `NO`;
            break;
        }
    }

    //If does not include _ and not next to each other - NO
    if (!b.includes(`_`)) {
        for (let index = 1; index < b.length - 1; index++) {
            if (b[index] !== b[index - 1] && b[index] !== b[index + 1]) {
                result = `NO`;
                break;
            }
        }
    }
    return result;
}

const b = `AABCBC`;
console.log(happyLadybugs(b));