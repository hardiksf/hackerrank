function acmTeam(topic) {

    const numberOfParticipants = topic.length;
    const numberOfTopics = topic[0].length;
    let maxNumberOfTopicsKnowsByATeam = 0;
    let targetedTeams = 0;
    const result = [];

    for (let i = 0; i < numberOfParticipants; i++) {
        let totalNumberOfTopicKnownByThisTeam = 0;
        for (let j = i + 1; j < numberOfParticipants; j++) {
            totalNumberOfTopicKnownByThisTeam = 0;
            for (let k = 0; k < numberOfTopics; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    totalNumberOfTopicKnownByThisTeam = totalNumberOfTopicKnownByThisTeam + 1;
                }
            }
            if (totalNumberOfTopicKnownByThisTeam > maxNumberOfTopicsKnowsByATeam) {
                targetedTeams = 0;
                maxNumberOfTopicsKnowsByATeam = totalNumberOfTopicKnownByThisTeam;
            }
            if (totalNumberOfTopicKnownByThisTeam === maxNumberOfTopicsKnowsByATeam) {
                targetedTeams = targetedTeams + 1;
            }
        }
    }
    result.push(maxNumberOfTopicsKnowsByATeam, targetedTeams);
    return result;
}

const topic = ['10101', '11100', '11010', '00101'];
acmTeam(topic);
