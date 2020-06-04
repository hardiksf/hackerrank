function viralAdvertising(n) {
    let shared, cummulative;
    shared = 5;
    cummulative = 0;
    for (let index = 0; index < n; index++) {
        shared = Math.floor(shared / 2);
        cummulative = cummulative + shared;
        shared = shared * 3;
    }
    return cummulative;
}

console.log(viralAdvertising(3));
