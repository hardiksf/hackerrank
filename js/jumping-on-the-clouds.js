function jumpingOnClouds(c) {

    let totalJumps = -1;
    for (let index = 0; index < c.length;) {

        if (c[index + 2] === 0) {
            totalJumps = totalJumps + 1;
            index = index + 2
        } else {
            totalJumps = totalJumps + 1;
            index = index + 1
        }
    }
    return totalJumps;
}



s = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(s));