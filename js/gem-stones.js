function gemstones(arr) {
    let counter = 0;
    for (let i = 97; i <= 122; i = i + 1) {
        if (arr.every(element => element.includes(String.fromCharCode(i)))) {
            counter = counter + 1;
        }
    }
    return counter;
}

arr = ['abcdde', 'baccd', 'eeabg'];
gemstones(arr);