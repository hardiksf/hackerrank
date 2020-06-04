function saveThePrisoner(n, m, s) {
    let result = (m + s - 1) % n;
    if (result === 0) {
        result = n;
    }
    return result;
}
console.log(saveThePrisoner(25, 24, 5)); // 4
console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(7, 19, 2)); // 6
console.log(saveThePrisoner(5, 24, 5));
