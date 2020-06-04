function marsExploration(s) {
    let counter = 0;

    for (let index = 0; index < s.length; index++) {
        if ((index + 2) % 3 === 0) {
            if (s.charAt(index) !== 'O') {
                counter = counter + 1;
            }
        } else {
            if (s.charAt(index) !== 'S') {
                counter = counter + 1;
            }
        }
    }
    return counter;
}
