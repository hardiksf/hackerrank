function howManyGames(p, d, m, s) {

    let result = 0;
    while (s >= p) {
        result = result + 1;
        s = s - p;
        p = Math.max(p - d, m);
    }
    return result;

}

howManyGames(20, 3, 6, 80);