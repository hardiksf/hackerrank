function birthday(s, d, m) {
    let counter = 0;
    for (let index = 0; index < s.length - m + 1; index++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum = sum + s[index + j];

        }
        if (sum === d) {
            counter = counter + 1;
        }
    }
    console.log(counter);

    return counter;
}

birthday([4], 4, 1);