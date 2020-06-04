function climbingLeaderboard(scores, alice) {

    const uniqueScores = Array.from(new Set(scores));
    const result = [];
    const aliceLength = alice.length;
    const scoresLength = uniqueScores.length;
    const maxScore = uniqueScores[0];
    const minScore = uniqueScores[scoresLength - 1];
    let doneWithThisIndex = false;

    let start = 0;
    let end = scoresLength - 1;

    for (let aliceIndex = 0; aliceIndex < aliceLength; aliceIndex++) {

        for (let scoreIndex = 0; scoreIndex < scoresLength; scoreIndex++) {
            if (doneWithThisIndex && result.length === aliceIndex + 1) {
                break;
            }

            const aliceCurrentScore = alice[aliceIndex];
            if (aliceCurrentScore >= maxScore) {
                result.push(1);
                break;
            } else if (aliceCurrentScore < minScore) {
                result.push(scoresLength + 1);
                break;
            } else if (aliceCurrentScore === minScore) {
                result.push(scoresLength);
                break;
            } else {
                while (!doneWithThisIndex) {
                    const midScoreIndex = Math.floor((start + end) / 2);
                    const scoreAtMidScoreIndex = uniqueScores[midScoreIndex];
                    if (scoreAtMidScoreIndex === aliceCurrentScore) {
                        result.push(midScoreIndex + 1);
                        doneWithThisIndex = true;
                        break;
                    } else if (scoreAtMidScoreIndex < aliceCurrentScore) {
                        if (uniqueScores[midScoreIndex - 1] === aliceCurrentScore) {
                            result.push(midScoreIndex);
                            doneWithThisIndex = true;
                            break;
                        }
                        if (uniqueScores[midScoreIndex - 1] > aliceCurrentScore) {
                            result.push(uniqueScores.indexOf(scoreAtMidScoreIndex) + 1);
                            doneWithThisIndex = true;
                            break;
                        } else {
                            end = end - midScoreIndex;
                        }// (scoreAtMidScoreIndex > aliceCurrentScore)
                    } else {
                        if (uniqueScores[midScoreIndex + 1] === aliceCurrentScore) {
                            result.push(midScoreIndex);
                            doneWithThisIndex = true;
                            break;
                        }

                        if (uniqueScores[midScoreIndex + 1] < aliceCurrentScore) {
                            result.push(uniqueScores.indexOf(scoreAtMidScoreIndex) + 2);
                            doneWithThisIndex = true;
                            break;
                        } else {
                            start = start + midScoreIndex;
                        }
                    }
                }
            }
        }
    }
    return result;
}

const scores = [100, 100, 50, 40, 40, 20, 10];
const alice = [5, 25, 50, 120];
/*
 * const alice = [50];
 * const scores = [18, 16, 14, 12, 10, 8];
 * const alice = [8];
 */
console.log(climbingLeaderboard(scores, alice));
