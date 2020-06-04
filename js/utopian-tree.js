function utopianTree(n) {
    if (n === 0) {
        return 1;
    } else if (n % 2 !== 0) {
        return utopianTree(n - 1) * 2;
    } else {
        return utopianTree(n - 1) + 1;
    }
}
