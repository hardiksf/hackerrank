function organizingContainers(container) {
    // if various container capacity is same as various ball type number than it is possible
    let result = 'Possible';
    const containerCapacity = [];
    const ballTypeDistribution = [];
    const length = container.length;

    /*
     * step1
     * calculate each container capacity and each ball type total and put them in array
     */
    for (let index = 0; index < length; index++) {
        const total = container[index].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        containerCapacity.push(total);

        let sum = 0;
        for (let j = 0; j < length; j++) {
            sum = sum + container[j][index];
        }
        ballTypeDistribution.push(sum);
        sum = 0;

    }
    // step2: sort both arrays
    containerCapacity.sort((a, b) => a - b);
    ballTypeDistribution.sort((a, b) => a - b);

    // step3: if both arrays are note same, it is impossible
    for (let index = 0; index < container.length; index++) {
        if (containerCapacity[index] !== ballTypeDistribution[index]) {
            result = 'Impossible';
            break;
        }
    }
    return result;
}

const container = [
    [1, 1],
    [1, 1],
];

console.log(organizingContainers(container));