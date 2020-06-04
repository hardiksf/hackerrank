// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    const result = [];
    let scoreAlice = 0;
    let scoreBob = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            scoreAlice = scoreAlice + 1;
        }
        if (a[i] < b[i]) {
            scoreBob = scoreBob + 1;
        }
    }
    result.push(scoreAlice);
    result.push(scoreBob);
    return result;

}
