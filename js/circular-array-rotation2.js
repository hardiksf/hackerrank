function circularArrayRotation(a, k, queries) {
    const aLength = a.length;
    const queriesLength = queries.length;
    for (let index = 0; index < queriesLength; index++) {
        console.log(a[(index + aLength - k) % aLength]);
    }

}
a = [1, 2];
k = 5;
queries = 1;
circularArrayRotation(a, k, queries);