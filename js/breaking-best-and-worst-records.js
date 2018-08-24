function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let result = [0, 0];

    for (let index = 0; index < scores.length; index++) {
        if (scores[index] > max) {
            max = scores[index];
            result[0] = result[0] + 1;
        }

        if (scores[index] < min) {
            min = scores[index];
            result[1] = result[1] + 1;
        }
    }

    return result;

}