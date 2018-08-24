function countingValleys(n, s) {
    let count = 0;
    let currentLevel = 0;
    for (let char of s) {
        if (char === "U") {
            currentLevel = currentLevel + 1;
        }
        if (char === "D") {
            currentLevel = currentLevel - 1;
        }
        if (currentLevel === 0 && char === "U") {
            count = count + 1;
        }
    }
    return count;
}