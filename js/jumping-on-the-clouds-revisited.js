function jumpingOnClouds(c, k) {
    let energyLevel = 100;
    for (let i = 0; i < c.length; i = i + k) {
        if (c[i + k] === 1) {
            energyLevel = energyLevel - 3;
        } else {
            energyLevel = energyLevel - 1;
        }
    }

    // if first cloud is is marked 1
    if (c[0] === 1) {
        energyLevel = energyLevel - 2;
    }
    return energyLevel;
}