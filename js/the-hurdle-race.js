function hurdleRace(k, height) {
    const maxHeightOfHurdle = Math.max(...height);
    let doesesNeeded = 0;
    if (maxHeightOfHurdle > k) {
        doesesNeeded = maxHeightOfHurdle - k;
    }
    return doesesNeeded;
}

// Max of of Array
